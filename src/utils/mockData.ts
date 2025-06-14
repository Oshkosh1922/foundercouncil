import { Founder } from '../types';

export const mockFounders: Founder[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    walletAddress: 'DsVmA5hWGAnP2FADTLJYstfXndxvGPgqzrpoC9kKSMwP',
    bio: 'Former Solana Labs engineer with 5+ years building on-chain programs. Specialized in high-performance NFT marketplaces and DeFi protocols.',
    twitterHandle: '@alexthompson_sol',
    profilePicture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    votes: 142,
    dateNominated: '2024-01-15',
    skills: [
      {
        name: 'Rust Programming',
        level: 5,
        description: 'Expert-level Rust developer with deep understanding of memory safety and performance optimization',
        projects: ['Solana DEX', 'NFT Marketplace', 'Cross-chain Bridge'],
        certifications: ['Solana Certified Developer', 'Rust Foundation Member']
      },
      {
        name: 'Solana Program Development',
        level: 5,
        description: 'Extensive experience building and deploying Solana programs using Anchor framework',
        projects: ['Magic Eden Clone', 'Serum DEX Fork', 'Custom AMM'],
        certifications: ['Solana Bootcamp Graduate', 'Anchor Certified']
      },
      {
        name: 'Smart Contract Security',
        level: 4,
        description: 'Specialized in identifying and preventing common vulnerabilities in on-chain programs',
        projects: ['Security Audit Tool', 'Vulnerability Scanner'],
        certifications: ['Certified Blockchain Security Professional']
      },
      {
        name: 'DeFi Protocol Design',
        level: 4,
        description: 'Designed and implemented multiple DeFi protocols with TVL exceeding $50M',
        projects: ['Yield Farming Protocol', 'Lending Platform', 'Liquidity Mining'],
        certifications: ['DeFi Certified Professional']
      },
      {
        name: 'Community Building',
        level: 3,
        description: 'Built and managed developer communities with 10k+ active members',
        projects: ['Solana Builders Discord', 'Weekly Tech Talks', 'Hackathon Organization']
      }
    ],
    experience: {
      yearsInWeb3: 5,
      totalProjectsLaunched: 12,
      totalVolumeGenerated: '$15.2M',
      specializations: ['NFT Infrastructure', 'DeFi Protocols', 'Developer Tooling']
    },
    technicalBackground: {
      programmingLanguages: ['Rust', 'TypeScript', 'Python', 'Go'],
      blockchainPlatforms: ['Solana', 'Ethereum', 'Polygon', 'Avalanche'],
      frameworks: ['Anchor', 'React', 'Next.js', 'Node.js'],
      tools: ['Solana CLI', 'Phantom', 'Metaplex', 'Jupiter', 'Serum']
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    walletAddress: '8FpBdXjKqmzdFQAoWQeM6N7kUoE2RvNyQJxKzVwPxMaB',
    bio: 'Product strategist and Solana ecosystem expert. Successfully launched 8 NFT collections with combined 50k SOL volume.',
    twitterHandle: '@sarahchen_sol',
    profilePicture: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    votes: 128,
    dateNominated: '2024-01-14',
    skills: [
      {
        name: 'Product Strategy',
        level: 5,
        description: 'Expert in defining product roadmaps and go-to-market strategies for Web3 projects',
        projects: ['Solana Monkey Business Strategy', 'DeGods Launch Plan', 'y00ts Roadmap'],
        certifications: ['Product Management Professional', 'Agile Certified']
      },
      {
        name: 'NFT Collection Design',
        level: 5,
        description: 'Specialized in creating compelling NFT collections with strong utility and community engagement',
        projects: ['8 Successful Collections', 'Trait Rarity System', 'Utility Token Integration'],
        certifications: ['Certified NFT Strategist']
      },
      {
        name: 'Solana Ecosystem Knowledge',
        level: 4,
        description: 'Deep understanding of Solana\'s technical architecture and ecosystem dynamics',
        projects: ['Ecosystem Analysis Reports', 'Integration Partnerships', 'Technical Documentation']
      },
      {
        name: 'Community Management',
        level: 5,
        description: 'Built and managed communities totaling 100k+ members across multiple platforms',
        projects: ['Discord Communities', 'Twitter Spaces', 'Ambassador Programs'],
        certifications: ['Community Management Professional']
      },
      {
        name: 'Marketing & Growth',
        level: 4,
        description: 'Proven track record in viral marketing campaigns and sustainable growth strategies',
        projects: ['Viral Twitter Campaigns', 'Influencer Partnerships', 'Content Strategy']
      }
    ],
    experience: {
      yearsInWeb3: 4,
      totalProjectsLaunched: 8,
      totalVolumeGenerated: '50,000 SOL',
      specializations: ['NFT Collections', 'Community Building', 'Product Strategy']
    },
    technicalBackground: {
      programmingLanguages: ['JavaScript', 'TypeScript', 'Python'],
      blockchainPlatforms: ['Solana', 'Ethereum'],
      frameworks: ['React', 'Next.js', 'Metaplex'],
      tools: ['Candy Machine', 'Sugar CLI', 'Phantom', 'Magic Eden API']
    }
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    walletAddress: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtABCD',
    bio: 'Full-stack blockchain developer and digital artist. Pioneer in programmable NFTs and on-chain generative art.',
    twitterHandle: '@marcus_creates',
    profilePicture: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    votes: 95,
    dateNominated: '2024-01-13',
    skills: [
      {
        name: 'Generative Art Programming',
        level: 5,
        description: 'Expert in creating algorithmic art using p5.js, Processing, and custom Rust implementations',
        projects: ['On-chain Art Engine', 'Generative PFP Collection', 'Interactive NFT Gallery'],
        certifications: ['Creative Coding Certified', 'Digital Art Professional']
      },
      {
        name: 'Full-Stack Development',
        level: 4,
        description: 'Comprehensive web development skills with focus on blockchain integration',
        projects: ['NFT Marketplace Frontend', 'Minting dApp', 'Portfolio Tracker'],
        certifications: ['Full-Stack Developer Certified']
      },
      {
        name: 'On-Chain Metadata',
        level: 4,
        description: 'Specialized in storing and manipulating NFT metadata directly on Solana blockchain',
        projects: ['Dynamic NFT System', 'Metadata Compression', 'Trait Evolution Engine']
      },
      {
        name: 'Creative Direction',
        level: 5,
        description: 'Strong artistic vision with ability to guide creative teams and establish brand identity',
        projects: ['Brand Identity Systems', 'Art Direction', 'Visual Storytelling']
      },
      {
        name: 'Smart Contract Integration',
        level: 3,
        description: 'Proficient in integrating frontend applications with Solana programs',
        projects: ['Wallet Integration', 'Transaction Handling', 'Program Interaction']
      }
    ],
    experience: {
      yearsInWeb3: 3,
      totalProjectsLaunched: 6,
      totalVolumeGenerated: '25,000 SOL',
      specializations: ['Generative Art', 'NFT Utilities', 'Creative Technology']
    },
    technicalBackground: {
      programmingLanguages: ['JavaScript', 'TypeScript', 'Rust', 'Python', 'GLSL'],
      blockchainPlatforms: ['Solana', 'Ethereum'],
      frameworks: ['React', 'Three.js', 'p5.js', 'Anchor'],
      tools: ['Metaplex', 'Candy Machine', 'Blender', 'Adobe Creative Suite']
    }
  },
  {
    id: '4',
    name: 'Emma Foster',
    walletAddress: 'BQWWFhzBdw2vKKBUX4WeNYoBhNd4QzLS5peNTWrhRMNZ',
    bio: 'Business development expert with deep connections in Solana ecosystem. Former partnerships lead at Magic Eden.',
    twitterHandle: '@emmafoster_sol',
    profilePicture: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    votes: 87,
    dateNominated: '2024-01-12',
    skills: [
      {
        name: 'Business Development',
        level: 5,
        description: 'Expert in forming strategic partnerships and driving business growth in Web3',
        projects: ['Magic Eden Partnerships', 'Cross-platform Integrations', 'Revenue Growth Initiatives'],
        certifications: ['Business Development Professional', 'Strategic Partnerships Certified']
      },
      {
        name: 'Ecosystem Partnerships',
        level: 5,
        description: 'Extensive network and experience in Solana ecosystem partnership development',
        projects: ['Solana Foundation Collaborations', 'Validator Partnerships', 'DeFi Integrations']
      },
      {
        name: 'Financial Strategy',
        level: 4,
        description: 'Strong background in financial planning, tokenomics, and sustainable business models',
        projects: ['Tokenomics Design', 'Revenue Models', 'Investment Strategies'],
        certifications: ['Financial Strategy Certified', 'Tokenomics Professional']
      },
      {
        name: 'Market Analysis',
        level: 4,
        description: 'Skilled in analyzing market trends and identifying growth opportunities',
        projects: ['Market Research Reports', 'Competitive Analysis', 'Trend Forecasting']
      },
      {
        name: 'Team Leadership',
        level: 4,
        description: 'Proven ability to build and lead high-performing teams in fast-paced environments',
        projects: ['Team Scaling', 'Performance Management', 'Culture Development'],
        certifications: ['Leadership Excellence', 'Team Management Professional']
      }
    ],
    experience: {
      yearsInWeb3: 4,
      totalProjectsLaunched: 15,
      totalVolumeGenerated: '100,000 SOL',
      specializations: ['Business Strategy', 'Partnership Development', 'Market Expansion']
    },
    technicalBackground: {
      programmingLanguages: ['Python', 'SQL', 'JavaScript'],
      blockchainPlatforms: ['Solana', 'Ethereum', 'Polygon'],
      frameworks: ['Data Analytics Tools', 'CRM Systems'],
      tools: ['Solana Beach', 'DeFiLlama', 'Dune Analytics', 'Flipside Crypto']
    }
  }
];

export const generateMockAddress = (): string => {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 44; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};