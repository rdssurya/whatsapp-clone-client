import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = "925857787371-3slkpa23ko7r1d2seqlfk8bkamkhf6uc.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
