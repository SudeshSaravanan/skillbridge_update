import { registerRootComponent } from 'expo';
import { Buffer } from 'buffer'
global.Buffer = Buffer

import process from 'process'
global.process = process

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
