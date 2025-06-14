import React from 'react';
import { Trophy, Crown, Medal, Award } from 'lucide-react';
import { Founder } from '../types';
import NomineeCard from './NomineeCard';

interface LeaderboardProps {
  founders: Founder[];
  user: any;
  onVote: (founderId: string) => void;
}

export default function Leaderboard({ founders, user, onVote }: LeaderboardProps) {
  const topThree = founders
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);

  const winner = topThree[0];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Weekly Champion
            </h2>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The community has spoken. Here's the leading founder who will receive funding to build the next revolutionary Solana NFT project.
          </p>
        </div>

        {/* Winner Spotlight */}
        {winner && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-4">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-lg">Current Leader</span>
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <NomineeCard
                founder={winner}
                canVote={user.isConnected && user.votedFounders.length < 3}
                hasVoted={user.votedFounders.includes(winner.id)}
                onVote={onVote}
                rank={1}
              />
            </div>
          </div>
        )}

        {/* Runner-ups */}
        {topThree.length > 1 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Runner-ups</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {topThree.slice(1).map((founder, index) => (
                <div key={founder.id} className="relative">
                  <div className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                    index === 0 ? 'bg-gray-400 text-gray-900' : 'bg-orange-500 text-white'
                  }`}>
                    {index === 0 ? '🥈 2nd' : '🥉 3rd'} Place
                  </div>
                  <NomineeCard
                    founder={founder}
                    canVote={user.isConnected && user.votedFounders.length < 3}
                    hasVoted={user.votedFounders.includes(founder.id)}
                    onVote={onVote}
                    rank={index + 2}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competition Info */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Weekly Selection Process</h3>
            <p className="text-gray-400">
              Every week, the community selects one founder to receive funding and support for their Solana NFT project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {founders.reduce((sum, f) => sum + f.votes, 0)}
              </div>
              <div className="text-gray-400">Total Votes Cast</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {founders.length}
              </div>
              <div className="text-gray-400">Active Nominees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                6d 14h
              </div>
              <div className="text-gray-400">Until Next Reset</div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
            <h4 className="text-yellow-400 font-medium mb-2">Winner Selection</h4>
            <p className="text-yellow-300 text-sm">
              The founder with the most votes at the end of each weekly cycle receives community funding, 
              technical support, and marketing assistance to launch their Solana NFT project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}