import React, { useState, useEffect } from 'react';
import { Founder, User } from './types';
import { mockFounders } from './utils/mockData';
import { useLocalStorage } from './hooks/useLocalStorage';
import Hero from './components/Hero';
import ConnectWallet from './components/ConnectWallet';
import NomineeGrid from './components/NomineeGrid';
import Leaderboard from './components/Leaderboard';
import VotingRules from './components/VotingRules';
import Footer from './components/Footer';

function App() {
  const [founders, setFounders] = useLocalStorage<Founder[]>('founders', mockFounders);
  const [user, setUser] = useLocalStorage<User>('user', {
    walletAddress: '',
    votedFounders: [],
    isConnected: false
  });

  const [showToast, setShowToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [currentSection, setCurrentSection] = useState('hero');

  // Show toast notifications
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleConnectWallet = (address: string) => {
    setUser({
      ...user,
      walletAddress: address,
      isConnected: true,
      votedFounders: [] // Reset votes when connecting new wallet
    });
    setShowToast({ message: 'Wallet connected successfully!', type: 'success' });
  };

  const handleDisconnectWallet = () => {
    setUser({
      walletAddress: '',
      votedFounders: [],
      isConnected: false
    });
    setShowToast({ message: 'Wallet disconnected', type: 'success' });
  };

  const handleVote = (founderId: string) => {
    if (!user.isConnected) {
      setShowToast({ message: 'Please connect your wallet to vote', type: 'error' });
      return;
    }

    if (user.votedFounders.includes(founderId)) {
      setShowToast({ message: 'You have already voted for this founder', type: 'error' });
      return;
    }

    if (user.votedFounders.length >= 3) {
      setShowToast({ message: 'You have already used all 3 votes', type: 'error' });
      return;
    }

    // Update user votes
    setUser({
      ...user,
      votedFounders: [...user.votedFounders, founderId]
    });

    // Update founder vote count
    setFounders(founders.map(founder => 
      founder.id === founderId 
        ? { ...founder, votes: founder.votes + 1 }
        : founder
    ));

    const remainingVotes = 2 - user.votedFounders.length;
    setShowToast({ 
      message: `Vote cast successfully! ${remainingVotes} votes remaining.`, 
      type: 'success' 
    });
  };

  const handleNominate = (newFounder: Omit<Founder, 'id' | 'votes' | 'dateNominated'>) => {
    const founder: Founder = {
      ...newFounder,
      id: Date.now().toString(),
      votes: 0,
      dateNominated: new Date().toISOString().split('T')[0]
    };

    setFounders([...founders, founder]);
    setShowToast({ message: 'Founder nominated successfully!', type: 'success' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NFT Founders' Council
              </h1>
              <nav className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection('nominees')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Nominees
                </button>
                <button 
                  onClick={() => scrollToSection('leaderboard')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Leaderboard
                </button>
                <button 
                  onClick={() => scrollToSection('rules')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Rules
                </button>
              </nav>
            </div>
            <ConnectWallet
              isConnected={user.isConnected}
              walletAddress={user.walletAddress}
              onConnect={handleConnectWallet}
              onDisconnect={handleDisconnectWallet}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <div id="hero">
          <Hero
            onConnectWallet={() => !user.isConnected && document.querySelector<HTMLButtonElement>('[data-wallet-connect]')?.click()}
            onViewNominees={() => scrollToSection('nominees')}
            isWalletConnected={user.isConnected}
          />
        </div>

        {/* Nominees Section */}
        <div id="nominees">
          <NomineeGrid
            founders={founders}
            user={user}
            onVote={handleVote}
            onNominate={handleNominate}
          />
        </div>

        {/* Leaderboard Section */}
        <div id="leaderboard">
          <Leaderboard
            founders={founders}
            user={user}
            onVote={handleVote}
          />
        </div>

        {/* Rules Section */}
        <div id="rules">
          <VotingRules />
        </div>

        {/* Footer */}
        <Footer />
      </main>

      {/* Toast Notifications */}
      {showToast && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
          showToast.type === 'success' 
            ? 'bg-green-900 border border-green-500 text-green-100' 
            : 'bg-red-900 border border-red-500 text-red-100'
        }`}>
          <p className="font-medium">{showToast.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;