import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const MAX_CONFIRMATIONS = 32;

export const NON_BREAKING_SPACE = '\u00a0';

// GenesysGo's devnet endpoint doesn't retain historical transactions
export const DEVNET_ENDPOINT = clusterApiUrl('devnet');

export const MAINNET_ENDPOINT = 'https://solanapay.genesysgo.net';

// Mint DUMMY tokens on devnet @ https://spl-token-faucet.com
export const DEVNET_DUMMY_MINT = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');

export const MAINNET_USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

// FIXME: share env vars between client and server
export const RECIPIENT = new PublicKey('2YVnh1hTwxS4V6ZZ8ybuY5rZsKDbhWAfD6L6JfdGsZ9y');