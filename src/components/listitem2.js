import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {ListItem,Body,H3,View,Right, Button, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var urlapi="https://visionapu.herokuapp.com/diet/rec/"

export default class listite extends React.Component{
    render()
    {
        return(
            <View>
            <ListItem thumbnail>
              <Body>
                <H3 style={{marginBottom:5}}>{this.props.rephead}</H3>
                <Text style={{marginBottom:5}}>{this.props.readyin} mins</Text>
                <Text note>Serves {this.props.servings}</Text>
              </Body>
              <Right>
                <Text note style={styles.centerText}>{this.props.date}</Text>
                <Button style={styles.custbutton} onPress={Actions.dietrecipe.bind(this,{url:urlapi+this.props.uri})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
            </ListItem>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 15,
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
    custbutton:{
      borderRadius:50,
      maxWidth:50
    }
  });