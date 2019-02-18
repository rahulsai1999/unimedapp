import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class scanafter extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Text>{this.props.message.message1}</Text>
      </View>
    );
  }
}