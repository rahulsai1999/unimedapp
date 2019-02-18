import React,{Component}from 'react';
import {AsyncStorage} from 'react-native';
import {Router,Scene,Actions,ActionConst} from 'react-native-router-flux';
import pdfvie from './pdfvie';
import homescr from './homescr';
import reports from './reports';
import presc from './presc';
import setings from './settings';
import ScanScreen from './scanscreen';
import medicine from './medicine';
import LoginForm from './login';
import RegisterF from './register';
import splashbefore from './splashbefore';
import scanafter from './scanafter';

export default class  RouterComponent extends Component
{
  onLeftmet()
  {
    Actions.home();
  }

  render()
  {
  return(
    <Router>
      <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="splashbef" component={splashbefore} hideNavBar/>
            <Scene key="login" component={LoginForm} hideNavBar/>
            <Scene key="register" component={RegisterF} hideNavBar />
          </Scene>
          <Scene key="home" hideNavBar type={ActionConst.RESET}>
            <Scene key="temp"
            component={homescr} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="reports" hideNavBar>
            <Scene key="temp"
            component={reports} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="setings" hideNavBar>
            <Scene key="temp"
            component={setings} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="presc" hideNavBar>
            <Scene key="temp"
            component={presc} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="pdf">
            <Scene key="temp"
            component={pdfvie} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="medicine" hideNavBar>
            <Scene key="temp"
            component={medicine} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="scan">
            <Scene key="temp"
            component={ScanScreen} 
            title={"Create Session"}
            renderBackButton=""
            onLeft={this.onLeftmet.bind(this)}/> 
          </Scene>
          <Scene key="scanafter">
            <Scene key="temp"
            component={scanafter} 
            title={"Session Created"}/> 
          </Scene>
      </Scene>
    </Router>
  )
  }
}
