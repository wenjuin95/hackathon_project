import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';
import { 
    ConnectModal,
    useCurrentAccount,
    createNetworkConfig, 
    SuiClientProvider, 
    WalletProvider, 
} from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl } from '@mysten/sui/client';
import '@mysten/dapp-kit/dist/index.css';

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
})
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('viewConnect')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
          <WalletProvider>
            <ViewConnect/>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )

function ViewConnect() {
	const currentAccount = useCurrentAccount();
    

  return (
    <div>
      <ConnectModal
			  trigger={
			  	<button disabled={!!currentAccount}> {currentAccount ? 'Connected' : 'Connect'}</button>
			  }
			  open={open}
			  onOpenChange={(isOpen) => setOpen(isOpen)}
		  />
    </div>
  )
}