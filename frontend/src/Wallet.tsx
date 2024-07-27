import React from 'react'
import ReactDOM from 'react-dom/client'
// import { useState } from 'react'
import { 
  ConnectButton,
  // ConnectModal, 
  createNetworkConfig, 
  SuiClientProvider, 
  WalletProvider 
} from '@mysten/dapp-kit';
// import { useCurrentAccount } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl } from '@mysten/sui/client';
import '@mysten/dapp-kit/dist/index.css';

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
})
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('wallet')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider>
          <Wallet />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

function Wallet() {
  return (
    <div>
        <ConnectButton />
    </div>
  )
}

// function Wallet() {
// 	const currentAccount = useCurrentAccount();
// 	const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <ConnectModal
// 			  trigger={
// 			  	<button disabled={!!currentAccount}> {currentAccount ? 'Connected' : 'Connect'}</button>
// 			  }
// 			  open={open}
// 			  onOpenChange={(isOpen) => setOpen(isOpen)}
// 		  />
//     </div>
//   )
// }


// function Wallet() {
//   const account = useCurrentAccount();
//   console.log('account: ', account)
//   return (
//     <div>
//         <ConnectButton />
//       {account === null ? (
//         <h2 style={{ color: 'white' }}>not connect</h2>
//       ) : (
//         <h2 style={{ color: 'white' }}>connected: {account.label}</h2>
//       )}
//     </div>
//   )
// }

