import Login from './authentication/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './authentication/registration';
import Profile from './authentication/profile';
import Forgotpassword from './authentication/forgotpassword';
import { StyleSheet } from 'react-native';
import Dashboard from './authentication/dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Devices from './screen/Devices';
import About from './screen/About';
import DrawBar from './screen/DrawBar';
import FAQ from './screen/FAQ';
import GetDone from './authentication/GetDone';
import Verification from './authentication/verification';
import Instructions from './screen/Instructions';
import History from './screen/History';
import YourDevices from './screen/YourDevices';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetDone" screenOptions={{headerShown:false}}>
        <Stack.Screen name="GetDone" component={GetDone} />
        <Stack.Screen name="Registration" component={Registration} options={{title:"Register"}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DrawBar" component={DrawBar} />
        <Stack.Screen name= "Devices"  component={Devices}/>
        <Stack.Screen name= "About" component={About}/>
        <Stack.Screen name= "FAQ's" component={FAQ}/>
        <Stack.Screen name= "Log Out" component={Login}/>
        <Stack.Screen name= "Instructions" component={Instructions}/>
        <Stack.Screen name= "History" component={History} />
        <Stack.Screen name= "Your Devices" component={YourDevices} />


        </Stack.Navigator>
    </NavigationContainer>
    
  );
}



/*const styles = StyleSheet.create({
  container: {
      width: 100,
      height: 100,
      backgroundColor: 'yellow'
  }

})
  */