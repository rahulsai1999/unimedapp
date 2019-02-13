import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';

export default class reports extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Reports</Text></Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Geeky Ants</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
        <Footerapp/>
      </View>
    );
  }
}