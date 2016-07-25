/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
import NoteScreen from './App/Components/NoteScreen';
import HomeScreen from './App/Components/HomeScreen';

class ReactNotes extends Component {
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home':
        return (
          <HomeScreen navigator={navigator} />
          );
      case 'createNote':
        return (
          <NoteScreen />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    switch(route.name) {
      case 'createNote':
        return(
          <SimpleButton
            onPress={() => navigator.pop()}
            customText='Back'
          />
        );
      default:
        return null;
    }
  },
  RightButton: function(route, navigator, index, navState) {
    switch(route.name) {
      case 'home':
        return(
          <SimpleButton
            onPress={() => {
              navigator.push({
                name: 'createNote'
              });
            }}
            customText='Create Note'
          />
        );
      default:
        return null;
    }
  },
  Title: function(route, navigator, index, navState) {
    switch(route.name) {
      case 'home':
        return(
          <Text>React Notes</Text>
        );
      case 'createNote':
        return(
          <Text>Create Note</Text>
        );
    }
  },

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
