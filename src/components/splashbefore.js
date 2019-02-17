import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, AsyncStorage} from 'react-native';
import { Container, Header, Card, CardItem , Content, Button, Text, Body, Footer} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashbefore extends React.Component {
  constructor()
  {
  super(); 
  this.state={delay: 1500};
  }

  componentDidMount(){
    setTimeout(()=>{
      AsyncStorage.getItem('token')
      .then((value)=>{
        if(value)
        {
          Actions.home()
        }
        else
        {
          Actions.login()
          this.setState({delay:50});
        }
      })
    },this.state.delay);
  }
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Content padder>
        <Image style={styles.centerImage} source={require('./uni.png')}/>
        {/* <Button onPress={Actions.login.bind(this)}><Text>Go</Text></Button> */}
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
    justifyContent:'center',
    marginRight:25,
    marginBottom:20
  }
});