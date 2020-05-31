import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/store';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

const Root = () => <Provider store={configureStore()}><App/></Provider>;

AppRegistry.registerComponent(appName, () => Root);
