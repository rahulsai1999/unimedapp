import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashbefore extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Content padder>
        <Image style={styles.centerImage} source={require('./uni.png')}/>
          <Text>Splash Screen</Text>
          <Button onPress={Actions.splashaft.bind(this)}><Text>Goto</Text></Button>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerImage:{
    flexGrow:1,
    height:400,
    width:400,
    alignItems: 'center',
    justifyContent:'center'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    color: 'black',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21
  },
  buttonTouchable: {
    padding: 16,
  },
  custbutton:{
    borderRadius:50,
    maxWidth:50
  }
});