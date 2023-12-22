import React  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddressPickup from "./AddressPickup";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Custombtn from "./Custombtn";


 const ChooseLocation =()=>{
    const navigation = useNavigation()
    const onDone =()=>{
        navigation.goBack()
    }

    const fetchAddressCords =(lat, lng)=>{
        console.log("lang",lat);
        console.log("lng",lng);
    }

    const fetchDestinationCords=(lat, lng)=>{
        console.log("lang",lat);
        console.log("lng",lng);
    }

    return (
        <View style= {styles.container}>
           <ScrollView 
           keyboardShouldPersistTaps ='handled'
           style ={{backgroundColor:'white', flex: 1, padding:14}} >
           <AddressPickup  placeholderText  ='Enter Pickup Location' fetchAddress= {fetchAddressCords}/>
           <View style={{marginBottom: 10}}/>
           <AddressPickup  placeholderText  ='Enter Distination Location' fetchAddress= {fetchDestinationCords}/>
           <Custombtn btnText="Done" btnStyle={{marginTop:24}} onPress={onDone}/>
           </ScrollView>
        </View>
        
    )
}


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        // backgroundColor: '#2c3e50',
    },
})



export default ChooseLocation;