import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 80002;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

const Amoy = {
  chainId: 80002,
  name: 'amoy',
  currency: 'Matic',
  explorerUrl: 'https://amoy.polygonscan.com/',
  rpcUrl: import.meta.env.VITE_AMOY_RPC
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [Amoy],
  projectId: import.meta.env.VITE_PROJECT_ID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#110A03',
    '--w3m-color-mix-strength': '40',
    '--w3m-border-radius-master': '10'
  }
})
