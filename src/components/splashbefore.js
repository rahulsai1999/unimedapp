import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
import { Container, Header, Card, CardItem , Content, Button, Text, Body, Footer} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashbefore extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Content padder>
        <Image style={styles.centerImage} source={require('./uni.png')}/>
        {/* <Button style={{}} onPress={Actions.login.bind(this)}><Text>GG</Text></Button> */}
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerImage:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
});