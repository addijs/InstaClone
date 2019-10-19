import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);


export default function App() {
  return (
    <>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='#eee'
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}