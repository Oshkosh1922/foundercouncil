import React, { useState } from 'react';
import { X, Upload, User, Wallet, MessageSquare, Twitter, Image } from 'lucide-react';
import { Founder } from '../types';
import { generateMockAddress } from '../utils/mockData';

interface NominationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (founder: Omit<Founder, 'id' | 'votes' | 'dateNominated'>) => void;
}

export default function NominationForm({ isOpen, onClose, onSubmit }: NominationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    walletAddress: '',
    bio: '',
    twitterHandle: '',
    profilePicture: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.bio) return;

    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    onSubmit({
      ...formData,
      walletAddress: formData.walletAddress || generateMockAddress(),
      profilePicture: formData.profilePicture || `https://images.pexels.com/photos/${1000000 + Math.floor(Math.random() * 1000000)}/pexels-photo-${1000000 + Math.floor(Math.random() * 1000000)}.jpeg?auto=compress&cs=tinysrgb&w=400`
    });

    setFormData({
      name: '',
      walletAddress: '',
      bio: '',
      twitterHandle: '',
      profilePicture: ''
    });
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Nominate a Founder</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-400 mt-2">
            Submit a nomination for the next NFT project founder. All submissions are reviewed by the community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Founder Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Enter founder's full name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Wallet className="w-4 h-4" />
                Wallet Address
              </label>
              <input
                type="text"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="0x... (optional - will generate if empty)"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Twitter className="w-4 h-4" />
              Twitter Handle
            </label>
            <input
              type="text"
              name="twitterHandle"
              value={formData.twitterHandle}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              placeholder="@username"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Image className="w-4 h-4" />
              Profile Picture URL
            </label>
            <input
              type="url"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              placeholder="https://... (optional - will use placeholder if empty)"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <MessageSquare className="w-4 h-4" />
              Bio *
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
              placeholder="Tell the community about this founder's background, experience, and vision for the NFT space..."
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.bio.length}/500 characters
            </p>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-blue-400 font-medium mb-2">Submission Guidelines</h3>
            <ul className="text-blue-300 text-sm space-y-1">
              <li>• Ensure all information is accurate and verifiable</li>
              <li>• Nominations are subject to community review</li>
              <li>• Inappropriate submissions will be removed</li>
              <li>• One nomination per wallet address</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.bio}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Submit Nomination
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}