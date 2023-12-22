import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Registration from './src/authentication/Registration';
import Login from './src/authentication/Login';
import OtpScreen from './src/authentication/OtpScreen';
import Onboarding from './src/screens/onboardingscreens/Onboarding';
import Onboard from './src/screens/onboardingscreens/Onboard';
import Welcome from './src/screens/welcome/Welcome';
import Splash from './src/screens/splash/Splash';
import Home from './src/authentication/Home';
import ChooseLocation from './src/authentication/ChooseLocation';
import ChooseDestination from './src/authentication/ChooseDestination';

const Stack = createStackNavigator();



function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Back" }}
        />
         <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Back" }}
        />
         <Stack.Screen
          name="ChooseLocation"
          component={ChooseLocation}
          options={{ title: "Back" }}
        />
          <Stack.Screen
          name="ChooseDestination"
          component={ChooseDestination}
          options={{ title: "Back" }}
        />

          <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
