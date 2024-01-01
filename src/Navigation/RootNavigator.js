// root.js
import React from 'react';
import { Linking, Image ,View,Text,TouchableOpacity  } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesome } from 'react-native-vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { launchImageLibrary } from 'react-native-image-picker'; 

// imports screens
import ProfileScreen from "../screens/Component/profile";
import DestinationSearch from "../screens/destinationsearch/DestinationSearch";
import ChooseVehicle from "../screens/home/ChooseVehicle";
import Welcome from "../screens/welcome/Welcome";
import Onboard from "../screens/onboardingscreens/Onboard";
import Onboarding from "../screens/onboardingscreens/Onboarding";
import OtpScreen from "../authentication/OtpScreen";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import Splash from "../screens/splash/Splash";
import Home from '../screens/home/HomeScreen';
import AboutUs from '../screens/Component/aboutUs';
import ChangeLanguage from '../screens/Component/changeLanguage';
import InviteFriends from '../screens/Component/InviteFriends';
import Booking from '../screens/Component/booking';
import DrawerHeader from './DrawerHeader';
import AppNavigation from './AppNavigation';


//stacknav

const StackNav = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
   <AppNavigation/>
  );
};

// drawer nav

const Drawer = createDrawerNavigator();
const CustomDrawerIcon = ({  color, size }) => (
  <Image
    // source={source}
    style={{ width: size, height: size, tintColor: color }}
  />
);

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerHeader onChangeImage={() => console.log('Change Image Pressed')} />
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        // name="HomeScreen"
        component={StackNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomDrawerIcon
            //   source={require('../../assets/home.png')}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomDrawerIcon
            //   source={require('../../assets/user.png')}
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Booking"
        component={Booking}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomDrawerIcon
            //   source={require('../../assets/booking.png')}
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen name="AboutUs" component={AboutUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomDrawerIcon
            //   source={require('../../assets/aboutus.png')}
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen name="ChangeLanguage" component={ChangeLanguage} options={{
        drawerIcon: ({ color, size }) => (
          <CustomDrawerIcon
            // source={require('../../assets/changelanguage.png')}
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
      />
      <Drawer.Screen name="InviteFriends" component={InviteFriends} options={{
        drawerIcon: ({ color, size }) => (
          <CustomDrawerIcon
            // source={require('../../assets/invitefrnds.png')}
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
      />
    </Drawer.Navigator>
  );
};

function Root() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default Root;



