import React from 'react';
import { Shield, Clock, Users, Award, CheckCircle, AlertTriangle } from 'lucide-react';

export default function VotingRules() {
  const rules = [
    {
      icon: Shield,
      title: 'Connect Your Solana Wallet',
      description: 'You must connect a Solana wallet (Phantom, Solflare, etc.) to participate in voting. Each wallet gets exactly 3 votes per cycle.',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'Vote for Up to 3 Founders',
      description: 'Choose wisely! You can distribute your 3 votes among different nominees, but cannot vote twice for the same founder.',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Weekly Reset Cycle',
      description: 'Voting cycles reset every Monday at 00:00 UTC. All vote counts return to zero and a new competition begins.',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      title: 'One Winner Per Week',
      description: 'The founder with the most votes at the end of each cycle receives funding and support to launch their Solana NFT project.',
      color: 'text-green-400'
    }
  ];

  const guidelines = [
    'Only vote for founders you genuinely believe in',
    'Research each nominee\'s technical skills and blockchain experience',
    'Consider the founder\'s track record in the Solana ecosystem',
    'Vote based on merit, not personal relationships',
    'Report any suspicious or fraudulent nominations'
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our democratic process ensures the community selects the most qualified founder to lead the next Solana NFT innovation.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {rules.map((rule, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center ${rule.color}`}>
                  <rule.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Guidelines */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-blue-400">Community Guidelines</h3>
            </div>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3 text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-yellow-400">Important Notes</h3>
            </div>
            <div className="space-y-4 text-yellow-300 text-sm">
              <div className="bg-yellow-900/30 rounded-lg p-3">
                <p className="font-medium mb-1">Demo Environment</p>
                <p>This is a demonstration platform. In production, voting would be secured by Solana blockchain and smart contracts.</p>
              </div>
              <div className="bg-yellow-900/30 rounded-lg p-3">
                <p className="font-medium mb-1">Fair Play</p>
                <p>Any attempts to manipulate voting through multiple accounts or bots will result in disqualification.</p>
              </div>
              <div className="bg-yellow-900/30 rounded-lg p-3">
                <p className="font-medium mb-1">Winner Selection</p>
                <p>The founder with the highest vote count receives funding, but final approval includes technical due diligence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Shape Solana's Future?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join hundreds of community members who are actively selecting the most promising founders to build the next generation of Solana NFT projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                View All Nominees
              </button>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Nominate a Founder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}