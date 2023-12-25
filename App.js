import React , { useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/utils/store';
import SplashScreen from 'react-native-splash-screen';
// import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { requestUserPermission , notificationListner} from './src/utils/notificationServices'


const App = () => {
 
  useEffect(() => {

    const timer = setTimeout(() => {
      SplashScreen.hide();
      
    }, 3000);
  
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  

  useEffect (()=>{
    requestUserPermission()
    notificationListner()
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;
    
  },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <AppNavigator/>

      </PersistGate>
    </Provider>
   

  );
};

export default App;
