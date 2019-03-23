import React, { Component } from 'react';
import { Image,AsyncStorage ,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { AppHeader } from './reusables/AppHeader';

export default class CardShowcaseExample extends Component {

constructor()
{
    super();
    this.state={
      isLoading:true,
      userData:{}
    };
    
}

componentDidMount()
  {
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch(this.props.url,
    {
    method:'get',
    headers:{'Accept':'application/json','Content-Type':'application/json'}})
    .then(response=>response.json())
    .then((response) =>
      {
        console.log(response);
        this.setState(
          {
            isLoading:false,
            userData:response
          }
        )
      })
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
      <AppHeader heading={this.state.userData.title}/>

          
            <View style={{flex:1,padding:3}}>
              <Left>
                <Body>
                  <Text>Ready in {this.state.userData.readyInMinutes} minutes</Text>
                  <Text>Serves {this.state.userData.servings}</Text>
                </Body>
              </Left>
              </View>
            <View style={{flex:8,justifyContent:'space-between',padding:5}}>
              <Body>
                <Image source={{uri: this.state.userData.image}} style={{alignContent:"center",height: 150, width:150,borderRadius:10,marginBottom:10}}/>
                <Text>
                    {this.state.userData.instructions}
                </Text>
              </Body>
            </View>
            <View style={{flex:1,backgroundColor:'white'}}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </View>
        

      </View>
    );
  }
}