import React, { Component } from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import Chat from './components/Chat';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='Chat' component={Chat} title='チャット'/>
        </Scene>
      </Router>
    );
  }
}
