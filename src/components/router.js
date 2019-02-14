import React,{Component}from 'react';
import {AsyncStorage} from 'react-native';
import {Router,Scene,Actions} from 'react-native-router-flux';
import pdfvie from './pdfvie';
import sample from './sample';
import Footerapp from './footerapp';
import homescr from './homescr';
import reports from './reports';
import presc from './presc';
import setings from './settings';
import ScanScreen from './scanscreen';

export default class  RouterComponent extends Component
{
  onLogOut()
  {
    Actions.home();
  }
  
  render()
  {
  return(
    <Router>
      <Scene key="root" hideNavBar>
        {/* <Scene key="auth">
            <Scene key="login" component={LoginForm} title={"Login"}  />
            <Scene key="register" component={RegisterF} title={"Register"} />
        </Scene> */}
          {/* <Scene key="Footer" hideNavBar>
            <Scene key="temp"
            component={Footerapp} 
            title={"Footer View"}/> 
          </Scene> */}
          <Scene key="home" hideNavBar>
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
          <Scene key="scan">
            <Scene key="temp"
            component={ScanScreen} 
            title={"Create Session"}
            renderBackButton=""
            onLeft={this.onLogOut.bind(this)}/> 
          </Scene>
      </Scene>
    </Router>
  )
  }
}
