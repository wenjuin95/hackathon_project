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
import { useState, useEffect,  } from 'react';

const { networkConfig } = createNetworkConfig({
    testnet: { url: getFullnodeUrl('testnet') },
  })
const packageId = '0xbe86a5bd42ea194d6304bcf414ea2cf44778bf1b37f5c756c32e00dff81cbe8a';
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
    const [downloadURL, setDownloadURL] = useState<string | null>(null);

    useEffect(() => {
        const handleFileUploaded = (event: CustomEvent) => {
            setDownloadURL(event.detail);
        };

        window.addEventListener('fileUploaded', handleFileUploaded);

        return () => {
            window.removeEventListener('fileUploaded', handleFileUploaded);
        };
    }, []);

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
        if (!downloadURL) {
            console.error('No download URL available'); //debug
            return;
        }
        else
        {
            console.log('Download URL:', downloadURL); //debug
        }

        const trx = new Transaction();
        const url = downloadURL;

        trx.moveCall({
            arguments:[trx.pure.string(url)],

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

