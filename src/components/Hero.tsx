import React from 'react';
import { Zap, Users, Shield } from 'lucide-react';

interface HeroProps {
  onConnectWallet: () => void;
  onViewNominees: () => void;
  isWalletConnected: boolean;
}

export default function Hero({ onConnectWallet, onViewNominees, isWalletConnected }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-cyan-400 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          The Solana NFT Space,{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Filtered by You
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Say goodbye to rugs. Fund real builders. Vote for the next Solana NFT founder through a 
          <span className="text-cyan-400 font-semibold"> community-led selection process</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={onConnectWallet}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </div>
          </button>
          
          <button
            onClick={onViewNominees}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg transform transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              View Nominees
            </div>
          </button>
        </div>

        {/* Coin Info Block */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Voting Power = SAGE Token</h3>
              <p className="text-gray-400 text-sm">Your voice in the Solana ecosystem</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            This is the SPL token you use to cast votes and fund the next founder's mission. 
            Each SAGE token represents your stake in the community's future.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">500+</div>
            <div className="text-gray-400 text-sm">Active Voters</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">25</div>
            <div className="text-gray-400 text-sm">Founder Nominees</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">7</div>
            <div className="text-gray-400 text-sm">Days Left</div>
          </div>
        </div>
      </div>
    </section>
  );
}