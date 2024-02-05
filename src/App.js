import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';

function App() {
  const clientId = "925857787371-3slkpa23ko7r1d2seqlfk8bkamkhf6uc.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
