import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Founder, User } from '../types';
import NomineeCard from './NomineeCard';
import NominationForm from './NominationForm';

interface NomineeGridProps {
  founders: Founder[];
  user: User;
  onVote: (founderId: string) => void;
  onNominate: (founder: Omit<Founder, 'id' | 'votes' | 'dateNominated'>) => void;
}

export default function NomineeGrid({ founders, user, onVote, onNominate }: NomineeGridProps) {
  const [showNominationForm, setShowNominationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'votes' | 'name' | 'date'>('votes');

  const filteredAndSortedFounders = founders
    .filter(founder => 
      founder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      founder.bio.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'votes':
          return b.votes - a.votes;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return new Date(b.dateNominated).getTime() - new Date(a.dateNominated).getTime();
        default:
          return 0;
      }
    });

  const canVote = user.isConnected && user.votedFounders.length < 3;

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet the <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Nominees</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the innovative builders and visionaries competing to lead the next breakthrough NFT project.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search nominees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'votes' | 'name' | 'date')}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            >
              <option value="votes">Sort by Votes</option>
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Date</option>
            </select>

            <button
              onClick={() => setShowNominationForm(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Nominate</span>
            </button>
          </div>
        </div>

        {/* Voting Status */}
        {user.isConnected && (
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-blue-400 font-medium">Your Voting Status</h3>
                <p className="text-gray-300 text-sm">
                  You have used {user.votedFounders.length}/3 votes
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < user.votedFounders.length ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedFounders.map((founder) => (
            <NomineeCard
              key={founder.id}
              founder={founder}
              canVote={canVote}
              hasVoted={user.votedFounders.includes(founder.id)}
              onVote={onVote}
            />
          ))}
        </div>

        {filteredAndSortedFounders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-400 mb-2">No nominees found</h3>
            <p className="text-gray-500">Try adjusting your search or be the first to nominate someone!</p>
          </div>
        )}

        <NominationForm
          isOpen={showNominationForm}
          onClose={() => setShowNominationForm(false)}
          onSubmit={onNominate}
        />
      </div>
    </section>
  );
}