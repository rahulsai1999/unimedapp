import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Form, Label, Input,Item, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class splashafter extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Login</Text></Header>
        <Content padder>
            <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block success style={{marginTop:20,borderRadius:30,alignSelf:'center'}} onPress={Actions.home.bind(this)}><Text>Login</Text></Button>
          <Text>Don't have an account?</Text>
          <Button block warning style={{marginTop:20,borderRadius:30,alignSelf:'center'}} onPress={Actions.register.bind(this)}><Text>Sign Up</Text></Button>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerbutt:{
    alignItems: 'center',
    justifyContent:'center'
  }
});