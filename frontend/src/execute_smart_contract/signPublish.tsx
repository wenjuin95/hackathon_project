import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit'; //for interacting with the blockchain
import { Transaction } from '@mysten/sui/transactions'; //for creating a transaction
import { 
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
const packageId = '0x72d4e3de05682d658208b1fd0496937504f19f644fec8c766282a516e7348a7b';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('publish')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect>
          <SignPublish onCreated={(id) => console.log('Created object ID:', id)}/>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

function SignPublish( { onCreated }: { onCreated: (id: string) => void; }) {
    const suiClient = useSuiClient()

    //for signing and executing a transaction
    const { mutate: signAndExecute } = useSignAndExecuteTransaction({
        execute: async ({ bytes, signature }) =>
            await suiClient.executeTransactionBlock({
                transactionBlock: bytes,
                signature,
                options: {
                    //raw effect is require so the effect can be report back to wallet
                    showRawEffects: true,
                    showEffects: true,
                    showBalanceChanges: true, //show balance changes
                }
            })
    });

    //create object
    function Create() {
        const trx = new Transaction();

        trx.moveCall({
            arguments:[],
            target: `${packageId}::copyrightOwner::create`,
        });

        signAndExecute(
            {
                transaction: trx,

            },
            {
                //on success, get the result and check if the object id is created
                onSuccess: (result) => {
                    const objectId = result.effects?.created?.[0]?.reference?.objectId;
                    if (objectId)
                    {
                        onCreated(objectId);
                    }
                },
                onError: (error) => {
                    console.error('Transaction failed:', error);
                },
            },
        )
    };

    return (
        <div>
            <button onClick={() =>  { Create(); }}>Create</button>
        </div>
    )
}

