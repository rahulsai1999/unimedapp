import React, {Component} from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import Footerapp from './footerapp';
import GoogleFit from 'react-native-google-fit';
import ProgressCircle from 'react-native-progress-circle';
import {Spinner,Fab, Container, Header, Card, CardItem , Content, Button, Text, Body} from 'native-base';
import Actions from 'react-native-router-flux';

GoogleFit.onAuthorize(() => {
  console.log('AUTH SUCCESS');
});

GoogleFit.authorize();

export default class homescr extends React.Component {
  constructor()
  {
    super();

    this.state={
      isLoading:true,
      isGLoading:true,
      userData:{},
      gfitData:{}
    };
  }

  renderGfitorSpinner()
  {
    if(this.state.isGLoading)
    {
      return(

        <View style={styles.mainComp}>
        <Text style={styles.textComp}>Loading User Details</Text>
        </View>
      )
    }
    else
    {
      return(
        <View>
        <Text style={styles.textComp}>Number of Steps Today:</Text>
        <Text style={styles.textComp}>{this.state.gfitData[0].steps[1].value}</Text>
        <ProgressCircle
            percent={(this.state.gfitData[0].steps[1].value/10000)*100}
            radius={70}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            style={{marginLeft:25}}>
            <Text style={{ fontSize: 18 }}>{this.state.gfitData[0].steps[1].value}/10000</Text>
        </ProgressCircle>
        </View>
      )
    }
  }
  
  
  componentDidMount()
  {
    const options = {
      startDate: "2019-02-19T00:00:17.971Z", // required ISO8601Timestamp
      endDate: new Date().toISOString() // required ISO8601Timestamp
    };
     
    GoogleFit.getDailyStepCountSamples(options, (err, res) => {
      if (err) {
        throw err;
      }
      else{
        this.setState(
          {
            isGLoading:false,
            gfitData:res
          })
      }
    }); 
  }
  
  render() {
    return (
      <View style={{height:1458}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Home</Text></Header>
        <Content padder>
          {this.renderGfitorSpinner()}
        </Content>
      </Container>
      <Footerapp/>
      </View>
    );
  }
}

const styles ={
  mainComp:{
    marginTop:20,
    alignItems:'center'
  },
  textComp:
  {
    marginTop:25,
    marginLeft:25,
    fontSize:30,
    fontWeight:'400'
  }
};
