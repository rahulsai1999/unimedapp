import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Accordion } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class FooterTabExample extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button vertical onPress={Actions.home.bind(this)}>
              <Icon name="home" />
            </Button>
            <Button vertical onPress={Actions.reports.bind(this)}>
              <Icon name="flask" />
            </Button>
            <Button vertical onPress={Actions.presc.bind(this)}>
              <Icon name="paper" />
            </Button>
            <Button vertical onPress={Actions.scan.bind(this)}>
              <Icon name="calendar" />
            </Button>
            <Button vertical onPress={Actions.setings.bind(this)}>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>


      {/*}
        <Header />
        <Content />
        <Footer>
          <FooterTab>
          <Button vertical >
              <Icon  name="navigate" />
            </Button>
            <Button vertical onPress={()=>{Actions.reports()}} >
              <Icon name="apps" />
            </Button>
            <Button vertical onPress={()=>{Actions.presc()}}>
              <Icon name="person" />
            </Button>
            
            <Button vertical onPress={()=>{Actions.scan()}}>
              <Icon name="apps" />
            </Button>
            <Button vertical onPress={()=>{Actions.setings()}} >
              <Icon name="apps" />
            </Button>
          </FooterTab>
        </Footer>
*/
    }
      </Container>
    );
  }
}

