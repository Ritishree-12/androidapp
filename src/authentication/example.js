import React  from "react";
import { View, Text, StyleSheet } from "react-native";

const ChooseDestination =()=>{
    return (
        <View style= {styles.container}>
            <Text>destination</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#2c3e50',
    },
})

export default ChooseDestination;

// id("com.google.gms.google-services") version "4.4.0" apply false