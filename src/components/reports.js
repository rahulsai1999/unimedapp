import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header,Fab,Icon,Card, CardItem , Content, Button, Text, Body ,H3,Right,List,ListItem} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class reports extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Reports</Text></Header>
        <Content padder>
        <List>
            <ListItem thumbnail>
              <Body>
                <H3 style={{marginBottom:5}}>Oncology Report</H3>
                <Text style={{marginBottom:5}}>Dr. Rajmohan</Text>
                <Text note>From the prognosis of the report, there is no swelling in the interior cruciate part of 3 B</Text>
              </Body>
              <Right>
                <Text note style={styles.centerText}>03/06/2018</Text>
                <Button transparent onPress={Actions.pdf.bind(this,{url:'https://res.cloudinary.com/doweee6jj/image/upload/v1547263956/hpmh1ojmsa18pl4tw2og.pdf'})}>
                  <Text>View Report</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={Actions.medicine.bind(this)}>
            <Icon name="ios-battery-charging" />
            </Fab>
      </Container>
        <Footerapp/>
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