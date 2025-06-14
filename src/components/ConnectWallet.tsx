import React, { useState } from 'react';
import { Wallet, Copy, CheckCircle, X } from 'lucide-react';

interface ConnectWalletProps {
  isConnected: boolean;
  walletAddress: string;
  onConnect: (address: string) => void;
  onDisconnect: () => void;
}

export default function ConnectWallet({ isConnected, walletAddress, onConnect, onDisconnect }: ConnectWalletProps) {
  const [showModal, setShowModal] = useState(false);
  const [inputAddress, setInputAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConnect = () => {
    if (inputAddress.length >= 10) {
      onConnect(inputAddress);
      setShowModal(false);
      setInputAddress('');
    }
  };

  const handleCopyAddress = async () => {
    if (walletAddress) {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-green-900/30 border border-green-500/30 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-mono text-sm">
            {truncateAddress(walletAddress)}
          </span>
          <button
            onClick={handleCopyAddress}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        <button
          onClick={onDisconnect}
          className="text-gray-400 hover:text-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        data-wallet-connect
        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
      >
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Connect Solana Wallet</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Solana Wallet Address (Demo)
                </label>
                <input
                  type="text"
                  value={inputAddress}
                  onChange={(e) => setInputAddress(e.target.value)}
                  placeholder="DsVmA5hWGAnP2FADTLJYstfXndxvGPgqzrpoC9kKSMwP"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm">
                  <strong>Demo Mode:</strong> Enter any Solana wallet address to simulate connection. 
                  Real integration would use Phantom, Solflare, or other Solana wallets.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConnect}
                  disabled={inputAddress.length < 10}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all duration-300"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}