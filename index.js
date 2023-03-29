/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App, {StoreConnectedApp} from './src/App';
import {name as appName} from './app.json';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const ProviderWrapper = () => {
  return (
    <Provider store={store}>
      {/* <App produits={} loadProducts={()=>{}} /> */}
      <StoreConnectedApp />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ProviderWrapper);
