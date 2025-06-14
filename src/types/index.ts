export interface Skill {
  name: string;
  level: number; // 1-5 scale
  description: string;
  projects?: string[];
  certifications?: string[];
}

export interface Founder {
  id: string;
  name: string;
  walletAddress: string;
  bio: string;
  twitterHandle: string;
  profilePicture: string;
  votes: number;
  dateNominated: string;
  skills: Skill[];
  experience: {
    yearsInWeb3: number;
    totalProjectsLaunched: number;
    totalVolumeGenerated: string;
    specializations: string[];
  };
  technicalBackground: {
    programmingLanguages: string[];
    blockchainPlatforms: string[];
    frameworks: string[];
    tools: string[];
  };
}

export interface User {
  walletAddress: string;
  votedFounders: string[];
  isConnected: boolean;
}

export interface VotingStats {
  totalVotes: number;
  totalFounders: number;
  weeklyReset: string;
}