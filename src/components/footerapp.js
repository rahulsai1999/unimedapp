import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Footerapp extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button vertical onPress={Actions.home.bind(this)}>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={Actions.presc.bind(this)}>
              <Icon name="flask" />
              <Text>Presc</Text>
            </Button>
            <Button vertical onPress={Actions.reports.bind(this)}>
              <Icon name="paper" />
              <Text>Reports</Text>
            </Button>
            <Button vertical onPress={Actions.scan.bind(this)}>
              <Icon name="settings" />
              <Text>Session</Text>
            </Button>
            <Button vertical onPress={Actions.setings.bind(this)}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}