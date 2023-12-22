import React  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddressPickup from "./AddressPickup";
import { ScrollView } from "react-native-gesture-handler";


 const ChooseLocation =()=>{



    return (
        <View style= {styles.container}>
           <ScrollView 
           keyboardShouldPersistTaps ='handled'
           style ={{backgroundColor:'white', flex: 1, padding:14}} >
           <AddressPickup  placeholderText  ='Enter Pickup Location'/>
           <View style={{marginBottom: 10}}/>
           <AddressPickup  placeholderText  ='Enter Distination Location'/>
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