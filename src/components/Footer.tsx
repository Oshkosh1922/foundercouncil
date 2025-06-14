import React from 'react';
import { Twitter, Github, MessageCircle, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Solana NFT Founders' Council</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Built by the community, for the community. Democratizing the selection of Solana NFT project founders through transparent, community-driven voting.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the Solana ecosystem</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#nominees" className="text-gray-400 hover:text-cyan-400 transition-colors">View Nominees</a></li>
              <li><a href="#leaderboard" className="text-gray-400 hover:text-cyan-400 transition-colors">Current Leader</a></li>
              <li><a href="#rules" className="text-gray-400 hover:text-cyan-400 transition-colors">Voting Rules</a></li>
              <li><a href="#nominate" className="text-gray-400 hover:text-cyan-400 transition-colors">Nominate</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Next Reset In:</div>
                <div className="text-cyan-400 font-mono font-bold">6d 14h 32m</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 Solana NFT Founders' Council. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}