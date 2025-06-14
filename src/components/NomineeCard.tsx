import React, { useState } from 'react';
import { Heart, Twitter, Calendar, Check, Code, Briefcase, Award, Users, TrendingUp } from 'lucide-react';
import { Founder } from '../types';

interface NomineeCardProps {
  founder: Founder;
  canVote: boolean;
  hasVoted: boolean;
  onVote: (founderId: string) => void;
  rank?: number;
}

export default function NomineeCard({ founder, canVote, hasVoted, onVote, rank }: NomineeCardProps) {
  const [isVoting, setIsVoting] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'experience' | 'technical'>('overview');

  const handleVote = async () => {
    if (!canVote || hasVoted || isVoting) return;

    setIsVoting(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    onVote(founder.id);
    setIsVoting(false);
  };

  const getRankStyling = () => {
    if (rank === 1) return 'border-yellow-400 shadow-lg shadow-yellow-400/20 bg-gradient-to-br from-yellow-900/20 to-gray-900';
    if (rank === 2) return 'border-gray-300 shadow-lg shadow-gray-300/20 bg-gradient-to-br from-gray-700/20 to-gray-900';
    if (rank === 3) return 'border-orange-600 shadow-lg shadow-orange-600/20 bg-gradient-to-br from-orange-900/20 to-gray-900';
    return 'border-gray-700 bg-gray-900';
  };

  const getRankIcon = () => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 5) return 'text-green-400 bg-green-400/20';
    if (level >= 4) return 'text-blue-400 bg-blue-400/20';
    if (level >= 3) return 'text-yellow-400 bg-yellow-400/20';
    if (level >= 2) return 'text-orange-400 bg-orange-400/20';
    return 'text-red-400 bg-red-400/20';
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">{founder.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="text-cyan-400 text-lg font-bold">{founder.experience.yearsInWeb3}</div>
                <div className="text-gray-400 text-xs">Years in Web3</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="text-purple-400 text-lg font-bold">{founder.experience.totalProjectsLaunched}</div>
                <div className="text-gray-400 text-xs">Projects Launched</div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-yellow-400 text-lg font-bold">{founder.experience.totalVolumeGenerated}</div>
              <div className="text-gray-400 text-xs">Total Volume Generated</div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {founder.skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getSkillLevelColor(skill.level)}`}>
                    {skill.level}/5
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{skill.description}</p>
                {skill.projects && skill.projects.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {skill.projects.slice(0, 3).map((project, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {project}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="text-cyan-400 font-medium text-sm mb-2">Specializations</h4>
                <div className="flex flex-wrap gap-1">
                  {founder.experience.specializations.map((spec, index) => (
                    <span key={index} className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="text-purple-400 font-medium text-sm mb-2">Key Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Experience</span>
                    <span className="text-white text-xs">{founder.experience.yearsInWeb3} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Projects</span>
                    <span className="text-white text-xs">{founder.experience.totalProjectsLaunched} launched</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Volume</span>
                    <span className="text-white text-xs">{founder.experience.totalVolumeGenerated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="text-green-400 font-medium text-sm mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-1">
                  {founder.technicalBackground.programmingLanguages.map((lang, index) => (
                    <span key={index} className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="text-blue-400 font-medium text-sm mb-2">Blockchain Platforms</h4>
                <div className="flex flex-wrap gap-1">
                  {founder.technicalBackground.blockchainPlatforms.map((platform, index) => (
                    <span key={index} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="text-yellow-400 font-medium text-sm mb-2">Tools & Frameworks</h4>
                <div className="flex flex-wrap gap-1">
                  {[...founder.technicalBackground.frameworks, ...founder.technicalBackground.tools].slice(0, 6).map((tool, index) => (
                    <span key={index} className="bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative border-2 rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${getRankStyling()}`}>
      {rank && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 border-2 border-gray-600 rounded-full flex items-center justify-center text-lg">
          {getRankIcon()}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={founder.profilePicture}
            alt={founder.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-gray-900 rounded-full"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white mb-1 truncate">{founder.name}</h3>
          <p className="text-gray-400 text-sm font-mono truncate">{founder.walletAddress}</p>
          
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-purple-400">
              <Heart className="w-4 h-4" />
              <span className="font-semibold">{founder.votes}</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Calendar className="w-3 h-3" />
              <span>{new Date(founder.dateNominated).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 bg-gray-800/50 rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: Users },
          { id: 'skills', label: 'Skills', icon: Award },
          { id: 'experience', label: 'Experience', icon: TrendingUp },
          { id: 'technical', label: 'Tech', icon: Code }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-cyan-500 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <tab.icon className="w-3 h-3" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mb-4 min-h-[200px]">
        {renderTabContent()}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {founder.twitterHandle && (
            <a
              href={`https://twitter.com/${founder.twitterHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              <Twitter className="w-4 h-4" />
              {founder.twitterHandle}
            </a>
          )}
        </div>

        <button
          onClick={handleVote}
          disabled={!canVote || hasVoted || isVoting}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            hasVoted
              ? 'bg-green-900/30 border border-green-500/30 text-green-400 cursor-not-allowed'
              : canVote && !isVoting
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isVoting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Voting...
            </>
          ) : hasVoted ? (
            <>
              <Check className="w-4 h-4" />
              Voted
            </>
          ) : (
            <>
              <Heart className="w-4 h-4" />
              Vote
            </>
          )}
        </button>
      </div>
    </div>
  );
}