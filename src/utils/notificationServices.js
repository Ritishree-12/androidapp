import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import notifee, {AndroidImportance} from '@notifee/react-native';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}


const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log("the old token", fcmToken);
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log("The new generated  fcmToken", fcmToken);
                await AsyncStorage.setItem(fcmToken, 'fcmToken')
            }

        } catch (error) {
            console.log("error raised in fcmToken", error);

        }
    }


}



//Notifee functionn here//
async function onDisplayNotification(data) {
    // Request permissions (required for iOS)

    if (Platform.OS=='ios'){
        await notifee.requestPermission()
    }
    

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default1',
      name: 'Default Channel1',
      sound: 'default',
      importance: AndroidImportance.HIGH
    });

    // Display a notification
    await notifee.displayNotification({
      title: data?.notification.title,
      body: data?.notification.body,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });

}


export const notificationListner = async()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
      });


      messaging().onMessage(async remoteMessage =>{
        console.log("received message in foreground",remoteMessage);
        onDisplayNotification(remoteMessage)
      })

      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
       
        }
        
      });
}