import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import '@mysten/dapp-kit/dist/index.css';


function App() {
  return (
    <div>
      <header>
        <ConnectButton />
      </header>
      <ConnectAccount />
    </div>
  )
}

function ConnectAccount() {
  const account = useCurrentAccount();

  if (!account){
    return <div>Not connected</div>;
  }

  return <div>Connected</div>
}

export default App
