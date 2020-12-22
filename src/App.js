import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.dribbble.com/users/1161517/screenshots/7896076/media/24ae74ddb6c9eb7789ae3a189a6b30ae.gif" className="App-logo" alt="logo" />
      </header>
      <div>
        <h2>Just a simple app to test out Amplify</h2>
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
