import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react' /*useEffect*/
import { 
  ConnectButton,
  // ConnectModal, 
  createNetworkConfig, 
  SuiClientProvider, 
  WalletProvider 
} from '@mysten/dapp-kit';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import '@mysten/dapp-kit/dist/index.css';

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
})
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('viewwallet')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect>
          <Viewwallet />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

// function Viewwallet() {
//   const account = useCurrentAccount();
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

const MIST_PER_SUI = 1_000_000_000; // Define the conversion rate if not already defined

function Viewwallet() {
  const account = useCurrentAccount();
  const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });
  const [balanceSUI, setBalanceSUI] = useState<number | null>(null); 

  if (account && balanceSUI === null) {
    (async () => {
      try {
        const balance = await suiClient.getBalance({ owner: account.address });
        const balanceInSUI = Number.parseInt(balance.totalBalance) / MIST_PER_SUI;
        setBalanceSUI(balanceInSUI);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
        setBalanceSUI(null);
      }
    })();
  }

  return (
    <div>
      <ConnectButton />
      {account === null ? (
        <h4 style={{ color: 'white' }}>not connect</h4>
      ) : (
          // <h4 style={{ color: 'white' }}>connected: {account.label}</h4>
          <div>
            <span style={{ color: 'white' }}>balance: $</span>
            <span id="globalBalance" style={{ color: 'white' }}>{balanceSUI}</span>
          </div>
      )}
    </div>
  );
}