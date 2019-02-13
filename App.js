import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Router from './src/components/router';
import Testing from './src/components/footerapp';
export default class App extends Component {
  render() {
    return (
      <Router/>
      //<Testing/>
    );
  }
}