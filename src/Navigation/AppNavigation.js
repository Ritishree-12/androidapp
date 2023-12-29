import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from '../authentication/Registration';
import Login from '../authentication/Login';
import OtpScreen from '../authentication/OtpScreen';
import Onboarding from '../screens/onboardingscreens/Onboarding';
import Onboard from '../screens/onboardingscreens/Onboard';
import Welcome from '../screens/welcome/Welcome';
import Splash from '../screens/splash/Splash';
import Home from '../authentication/Home';
import ChooseLocation from '../authentication/ChooseLocation';
import ChooseDestination from '../authentication/ChooseDestination';
import HomeScreen from '../screens/home/HomeScreen';
import TruckTypes from '../screens/trucktypes/TruckTypes';
import TruckRow from '../screens/trucktypes/TruckRow';
import DestinationSearch from '../screens/destinationsearch/DestinationSearch';
import SearchResult from '../screens/destinationsearch/SearchResult';

const Stack = createStackNavigator();



function AppNavigation() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {isLoggedIn ? (
          <>        
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
              name="TruckTypes"
              component={TruckTypes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TruckRow"
              component={TruckRow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="DestinationSearch"
            component={DestinationSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            options={{ headerShown: false }}
          />
          </>

          ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
