import React, {Component} from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';

import NasaPictureOfTheDay from './containers/NasaPictureOfTheDay';

import configureStore from './store/configureStore';
const store = configureStore();

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Provider store={store}>
          <NasaPictureOfTheDay />
        </Provider>
      </View>
    );
  }
}
