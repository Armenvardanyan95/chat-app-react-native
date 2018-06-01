/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './pages/login';
import Registration from './pages/registration';
import Chat, { ChatHeader } from './pages/chat';

export default class App extends Component {

  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={Login} initial={true} title="Login"/>
                <Scene key="registration" component={Registration} title="Registration"/>
                <Scene key="chat" component={Chat} title="Chat"/>
            </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    input: {
      width: 200
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});
