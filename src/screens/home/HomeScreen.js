import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeMap from "../../map/HomeMap";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const navigation=useNavigation()
  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  }
  // const handleChooseVehicle=()=>{
  //   navigation.navigate('ChooseVehicle')
  // }

  
  return (
    <View style={styles.container}>
      <View style={{ height: Dimensions.get('window').height - 200 }}>
        <HomeMap />
      </View>
      <BottomSheet
        // index={1} 
        snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={styles.bottomSheetContainer}>
          <Text style={styles.text1}>Where are you going today?</Text>

          <View style={styles.locationContainer}>
            <Pressable style={styles.locationButton} onPress={goToSearch}>
              <Icon name="circle" size={20} color="green" />
              <Text style={styles.locationText}>From</Text>
            </Pressable>
            <Pressable style={styles.locationButton} onPress={goToSearch}>
              <Icon name="location-arrow" size={20} color="red" />
              <Text style={styles.locationText}>To</Text>
            </Pressable>
          </View>

          <Text style={styles.recentPlacesText}>Recent Places</Text>

          <View style={styles.recentPlacesContainer}>
            <Text style={styles.recentPlacesText}>01 Places</Text>
            <Text style={styles.recentPlacesText}>02 Places</Text>
          </View>

          <Pressable
            style={styles.chooseVehicleButton}
            onPress={() => {
              console.log("Choose Vehicle button pressed");
              navigation.navigate("ChooseVehicle");
            }}
          >
            <Text style={styles.chooseVehicleButtonText}>
              Choose a Vehicle
            </Text>
          </Pressable>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomSheetContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red'
  },
  locationContainer: {
    flexDirection: 'column', // Change to column
    marginBottom: 20,
  },
  locationButton: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'red', // Set border color
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',

  },
  locationText: {
    color: 'red',
    fontSize: 18,
    marginLeft: 10,
  },
  recentPlacesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentPlacesContainer: {
    marginBottom: 0,
  },
  chooseVehicleButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  chooseVehicleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
