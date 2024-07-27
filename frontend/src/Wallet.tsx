import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  ConnectButton, 
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
      <header>
        <ConnectButton />
      </header>
    </div>
  )
}

<<<<<<< HEAD
function ConnectAccount() {
  const account = useCurrentAccount();

  if (!account){
    return <div>Not connected</div>;
  }

  return <div>Connected</div>
}

export default Wallet
=======
// function Wallet() {
//   const account = useCurrentAccount();
//   console.log('account: ', account)
//   return (
//     <div>
//         <ConnectButton />
//       {account === null ? (
//         <h2 style={{ color: 'white' }}>not connect</h2>
//       ) : (
//         <h2 style={{ color: 'white' }}>connected</h2>
//       )}
//     </div>
//   )
// }
>>>>>>> 9b2255f4b7adf55debc2c744945263b23bead559
