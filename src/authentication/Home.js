
import { useState, useRef } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import MapView, { Marker } from 'react-native-maps';
import {GOOGLE_MAPS_APIKEY} from '../utils/Constants'
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../utils/imagePath';



const Home = ({navigation}) => {
   

   
    const [locationPoints, setlocationPoints] = useState(
        {
            pickupCords: {
                latitude: 30.7046,
                longitude: 76.7179,
                latitudeDelta: 0.0922,
                longitudeDelta:0.0421,
            },
            droplocationCords: {
                latitude: 30.7333,
                longitude: 76.7794,
                latitudeDelta: 0.0922,
                longitudeDelta:0.0421,
            }
        }
    )
        const mapRef =useRef()
    const { pickupCords, droplocationCords } = locationPoints

    const onPressLocation =()=>{
      
        navigation.navigate("ChooseLocation")
     
    }
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
            <MapView
            ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={pickupCords}>
                    <Marker coordinate={pickupCords}
                    image={imagePath.icCurloc}/>
                    <Marker coordinate={droplocationCords} 
                    image={imagePath.icGeenMarker}/>

                   
                <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    optimizeWaypoints={true}
                    onReady={result =>{
                        mapRef.current.fitToCoordinates(result.coordinates,{edgePadding:{
                            right:30,
                            bottom:300,
                            left:30,
                            top:100
                        }})
                    }}
                />


            </MapView>
            </View>

            <View style ={styles.bottomCard}>
                <Text>Where are you going today?</Text>
                  <TouchableOpacity
                    style={styles.inputStyle}
                    onPress={onPressLocation} 
                    >

                        <Text>From Where</Text>
                        </TouchableOpacity>

                   
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomCard :{
        backgroundColor: "White",
        Width: '100%',
        padding: 30,
        borderTopRadius: 24,
        borderTopRadius: 24,
    },
    inputStyle:{

        backgroundColor: "White",
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height:48,
        justifyContent: 'center',
        marginTop: 16
    }

})
    

export default Home
