import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Picker,Icon,Form, Item,Container,Label, Header, DatePicker,Input, Content, Button, Text, Spinner,Body} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Register extends React.Component {
  constructor()
  {
    super();
    this.state={username:"",password:"",name:"",dob:new Date(),height:"",weight:"",email:"",bloodgrp:"",gender:"",isLoading:false,error:false}
  }
  onChangeUserName(value){this.setState({username:value})}
  onChangePassword(value){this.setState({password:value})}
  onChangeName(value){this.setState({name:value})}
  onChangeDob(value){this.setState({dob:value})}
  onChangeHeight(value){this.setState({height:value})}
  onChangeWeight(value){this.setState({weight:value})}
  onChangeEmail(value){this.setState({email:value})}
  onChangeBloodGrp(value){this.setState({bloodgrp:value})}
  onChangeGender(value){this.setState({gender:value})}

  displayErrorMessage()
  {
    if(this.state.error)
    {return(<Text>Invalid Credentials</Text>);}
    return;
  }

  renderLoadingorRegister()
  {
    if(this.state.isLoading===true)
    {return(<Spinner/>)}
    else
    {return(<Button block success style={{marginTop:20,borderRadius:30}} onPress={this.onRegister.bind(this)}><Text>Register</Text></Button>)}
  }
  onLogin()
  {
    Actions.login()
  }
  onRegister()
  {
    const credentialsObject={username:this.state.username,password:this.state.password,name:this.state.name,dob:this.state.dob,height:this.state.height,weight:this.state.weight,email:this.state.email,bloodgrp:this.state.bloodgrp,gender:this.state.gender}
    this.setState({isLoading:true,error:false})

    fetch('https://visionapu.herokuapp.com/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(credentialsObject) })
    .then(response=>response.json())
    .then((response) =>
      {
       this.setState({isLoading:false})
       if(response.error)
      {this.setState({error:true})}
       else
       {
         Actions.login();
       }
      })
  }

  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Register</Text></Header>
        <Content padder>
        <Form>
            <Item rounded>
              <Input value={this.state.username} placeholder="  Username"
              onChangeText={this.onChangeUserName.bind(this)}/>
            </Item>
            <Item rounded>
              <Input value={this.state.password} placeholder="  Password"
              onChangeText={this.onChangePassword.bind(this)} 
              secureTextEntry={true}/>
            </Item>
            <Item rounded>
              <Input value={this.state.name} placeholder="  Name"
              onChangeText={this.onChangeName.bind(this)}/>
            </Item>
            <Item rounded>
              <Input value={this.state.email} placeholder="  Email"
              onChangeText={this.onChangeEmail.bind(this)}/>
            </Item>
            
            <Item rounded>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(1970, 1, 1)}
                maximumDate={new Date(2019, 12, 31)}
                locale={"in"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date of Birth"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.onChangeDob.bind(this)}
                disabled={false}/>
                </Item>
            <Item rounded>
              <Input value={this.state.height} placeholder="Height"
              onChangeText={this.onChangeHeight.bind(this)}/>
            </Item>
            <Item rounded>
              <Input value={this.state.weight} placeholder="Weight"
              onChangeText={this.onChangeWeight.bind(this)}/>
            </Item>
            <Item picker rounded>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Blood Group"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={this.onChangeGender.bind(this)}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Non-Binary" value="Non-Binary" />
              </Picker>
            </Item>
            <Item picker rounded>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Blood Group"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.bloodgrp}
                onValueChange={this.onChangeBloodGrp.bind(this)}>
                <Picker.Item label="A+ve" value="A+ve" />
                <Picker.Item label="B+ve" value="B+ve" />
                <Picker.Item label="O+ve" value="O+ve" />
                <Picker.Item label="A-ve" value="A-ve" />
                <Picker.Item label="B-ve" value="B-ve" />
                <Picker.Item label="O-ve" value="O-ve" />
                <Picker.Item label="AB+ve" value="AB+ve" />
                <Picker.Item label="AB-ve" value="AB-ve" />
              </Picker>
            </Item>
          </Form>
          <View>{this.displayErrorMessage()}</View>
          <View>{this.renderLoadingorRegister()}</View>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});