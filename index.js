/**
 * @format
 */

// index.js

import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import { Amplify } from 'aws-amplify';
import App from './App';
import {name as appName} from './app.json';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

AppRegistry.registerComponent(appName, () => App);