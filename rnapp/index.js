/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

global.url="https://192.168.0.114:3000";
AppRegistry.registerComponent(appName, () => App);
