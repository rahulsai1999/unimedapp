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
import dietplan from './dietplan';
import dietrecipe from './dietrecipe';

//healthcate routes
import ImagePicker from './ImagePicker';
import ConfirmFoodScreen from './ConfirmFoodScreen';
import FoodInformation from './FoodInformation';
import DetailsPage from './DetailsPage';

import Profile from './profile';

export default class  RouterComponent extends Component
{
  onLeftmet()
  {
    Actions.home();
  }

  onLogOut()
  {
    //delete the token first and then navigate to login screen
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('Breakfast');
    AsyncStorage.removeItem('Lunch');
    AsyncStorage.removeItem('Snacks');
    AsyncStorage.removeItem('Dinner');

    Actions.auth();
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
            component={Profile} 
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
          <Scene key="fooddetailpage"
            component={DetailsPage} 
            title={"Full Day Details"}
            hideNavBar="true" />  
          <Scene key="uploadscreen"
            component={ImagePicker} 
            title={"Image Uploader"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}/> 
          <Scene key="confirmfoodscreen"
            component={ConfirmFoodScreen} 
            title={"Confirm Food"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}/> 
          <Scene key="foodinformationscreen"
            component={FoodInformation} 
            title={"Your Food Details"}
            rightTitle="Logout"
            onRight={this.onLogOut.bind(this)}  />
          <Scene key="dietplan" hideNavBar>
            <Scene key="temp"
            component={dietplan} 
            title={"Report View"}/> 
          </Scene>
          <Scene key="dietrecipe" hideNavBar>
            <Scene key="temp"
            component={dietrecipe} 
            title={"Report View"}/> 
          </Scene>   
      </Scene>
    </Router>
  )
  }
}
