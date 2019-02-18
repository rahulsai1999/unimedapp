import React, { Component } from 'react';
import {StyleSheet,Text,TouchableOpacity,Linking,AsyncStorage} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Actions } from 'react-native-router-flux';


export default class ScanScreen extends Component {  

  onSuccess(e) {
    console.log(e.data);
    AsyncStorage.getItem('token')
    .then((token)=>{
    fetch('https://unimedapi.herokuapp.com/session/create',
    {
    method:'post',
    body:JSON.stringify({docid:e.data}),
    headers:{'Accept':'application/json','Content-Type':'application/json','Authorization':'JWT '+token}})
    .then((response) =>
      {
        Actions.scanafter({message:response})
      })
    })
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }
  
 
  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
          <Text style={styles.textBold}>Scan the Doctor's QR Code to start session</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={Actions.home.bind(this)}>
            <Text style={styles.buttonText}>OK Done</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}
 
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
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
