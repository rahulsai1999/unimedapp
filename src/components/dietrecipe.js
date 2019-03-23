import React, { Component } from 'react';
import { Image,AsyncStorage } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

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
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>{this.state.userData.title}</Text></Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Ready in {this.state.userData.readyInMinutes} minutes</Text>
                  <Text>Serves {this.state.userData.servings}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: this.state.userData.image}} style={{alignContent:"center",height: 200, width: 200, flex: 1}}/>
                <Text>
                    {this.state.userData.instructions}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}