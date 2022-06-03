import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import WelcomeScreen from './components/welcome-screen/welcome-screen';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <WelcomeScreen />
  </React.StrictMode>,
  document.getElementById('root'));
