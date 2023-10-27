import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const MAX_CONFIRMATIONS = 16;

export const NON_BREAKING_SPACE = '\u00a0';

// GenesysGo's devnet endpoint doesn't retain historical transactions
export const DEVNET_ENDPOINT = clusterApiUrl('devnet');

// Use Phantom's mainnet endpoint instead of GenesysGo (auth issue) or default (ratelimits)
// export const MAINNET_ENDPOINT = 'https://rpc.ankr.com/solana';
// export const MAINNET_ENDPOINT = 'https://solana-mainnet.g.alchemy.com/v2/v8O0wMuB-QYzIjESDPYKKcYHDKxjh6fY';
export const MAINNET_ENDPOINT = 'https://solana-mainnet.phantom.tech';
// export const MAINNET_ENDPOINT = 'https://api.mainnet-beta.solana.com';
// export const MAINNET_ENDPOINT = 'https://solana-api.projectserum.com';

// Mint DUMMY tokens on devnet @ https://spl-token-faucet.com

export const DEVNET_DUMMY_MINT = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');

export const MAINNET_USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
