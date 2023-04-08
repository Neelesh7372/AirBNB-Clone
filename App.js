/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import { StatusBar } from 'react-native';


const App = () => {

  return (
    <>
    <StatusBar barStyle={"dark-content"}/>
    <Router />
    </>
  );
};

export default withAuthenticator(App);
