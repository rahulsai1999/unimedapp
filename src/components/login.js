import React, {Component} from 'react';
import {Platform, StyleSheet, View, AsyncStorage} from 'react-native';
import { Container, Header, Form, Label, Input,Item, Card, CardItem , Content, Button, Text, Body, Spinner} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  
  constructor()
  {
    super();
    this.state={username:"",password:"",isLoading:false,error:false}
  }
  
  displayErrorMessage()
  {
    if(this.state.error)
    {
      return(<Text>Invalid Credentials</Text>);
    }
    return;
  }

  renderLoadingorLogin()
  {
    if(this.state.isLoading===true)
    {
      return(<Spinner/>)
    }

    else
    {return(<Button block success style={{marginTop:20,borderRadius:30}} onPress={this.onLogin.bind(this)}><Text>Login</Text></Button>)}
  }
  
  onChangeUserName(value)
  {
    this.setState({username:value})
  }
  onChangePassword(value)
  {
    this.setState({password:value})
  }
  onRegister()
  {
    Actions.register()
  }
  
  onLogin()
  {
    //const credentialsObject={username:this.state.username,password:this.state.password,}
    const credentialsObject={username:'helloworld1@gmail.com',password:'qwerty',}

    this.setState({isLoading:true,error:false})

    fetch('https://visionapu.herokuapp.com/login',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(credentialsObject) })
    .then(response=>response.json())
    .then((response) =>
      {
       // Actions.home();
       this.setState({isLoading:false})
       if(response.error)
        {this.setState({error:true})}
      else
      {
        AsyncStorage.setItem('token',response.token);
        console.log(response.token);
        Actions.home();
      }
      })
  }
  
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Login</Text></Header>
        <Content padder>
            <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value={this.state.username}
              onChangeText={this.onChangeUserName.bind(this)}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input value={this.state.password}
              onChangeText={this.onChangePassword.bind(this)} 
              secureTextEntry={true}/>
            </Item>
          </Form>
          <View>{this.displayErrorMessage()}</View>
          <View>{this.renderLoadingorLogin()}</View>
          <Text>Don't have an account?</Text>
          <Button block warning style={{marginTop:20,borderRadius:30}} onPress={this.onRegister.bind(this)}><Text>Sign Up</Text></Button>
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