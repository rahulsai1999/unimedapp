import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Footerapp from './footerapp';
import { Container, Header, Card, CardItem , Content, Button, Text, Body,ListItem,CheckBox,Right} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export default class presc extends React.Component {
  render() {
    return (
      <View style={{height:1460}}>
      <Container>
        <Header><Text style={{color:'white',marginTop:15,fontSize:20 }}>Prescriptions</Text></Header>
        <Content style={styles.centerText}>
        <Card>
          <CardItem header>
              <Text>Dr.Rajmohan</Text>
              <Right>
                <Text>22/02/2019</Text>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>ALPRAX</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="orange" />
                <Icon name="weather-sunny" size={25} color="orange" />
                <Icon name="weather-sunset-down" size={25} color="black" />
                <Icon name="weather-night" size={25} color="black" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"ALPRAX"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>VOLIX</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="orange" />
                <Icon name="weather-sunny" size={25} color="black" />
                <Icon name="weather-sunset-down" size={25} color="black" />
                <Icon name="weather-night" size={25} color="orange" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"VOLIX"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>GLUCORYL-MV</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="orange" />
                <Icon name="weather-sunny" size={25} color="orange" />
                <Icon name="weather-sunset-down" size={25} color="orange" />
                <Icon name="weather-night" size={25} color="black" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"GLUCORYL-MV"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
              <Text>Dr.Shrivastava</Text>
              <Right>
                <Text>23/02/2019</Text>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>TAMLOCEPT-D</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="orange" />
                <Icon name="weather-sunny" size={25} color="black" />
                <Icon name="weather-sunset-down" size={25} color="black" />
                <Icon name="weather-night" size={25} color="orange" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"TAMLOCEPT-D"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>DEXONA</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="orange" />
                <Icon name="weather-sunny" size={25} color="black" />
                <Icon name="weather-sunset-down" size={25} color="black" />
                <Icon name="weather-night" size={25} color="black" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"DEXONA"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
          <CardItem>
            <Text style={styles.centerText}>URIMAX</Text>
              <Right>
                <Text>
                <Icon name="weather-sunset-up" size={25} color="black" />
                <Icon name="weather-sunny" size={25} color="black" />
                <Icon name="weather-sunset-down" size={25} color="black" />
                <Icon name="weather-night" size={25} color="orange" />
                </Text>
              </Right>
              <Right>
                <Button  onPress={Actions.medicine.bind(this,{uri:"URIMAX"})}  style={styles.custbutton}><Text><Icon name="arrow-right" size={20}></Icon></Text></Button>
              </Right>
          </CardItem>
        </Card>
        </Content>
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
    color: 'black',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21
  },
  buttonTouchable: {
    padding: 16,
  },
  custbutton:{
    borderRadius:50,
    maxWidth:50
  }
});