import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {ListItem,Body,H3,View,Right, Button, Icon, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class listite extends React.Component{
    render()
    {
        return(
            <View>
            <ListItem thumbnail>
              <Body>
                <H3 style={{marginBottom:5}}>{this.props.rephead}</H3>
                <Text style={{marginBottom:5}}>{this.props.docname}</Text>
                <Text note>{this.props.reptext}</Text>
              </Body>
              <Right>
                <Text note style={styles.centerText}>{this.props.date}</Text>
                <Button transparent onPress={Actions.pdf.bind(this,{url:this.props.uri})}>
                  <Text>View Report</Text>
                </Button>
              </Right>
            </ListItem>
            </View>
        )
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