import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
 import Icon from "react-native-vector-icons/FontAwesome6";

import HomeMap from "../../map/HomeMap";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"; // Assuming TouchableOpacity is imported from 'react-native-gesture-handler'
import Menu from "./Menu";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };
  const route = useRoute();

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [recentLocations, setRecentLocations] = useState([
    "Recent Location 1",
    "Recent Location 2",
    "Recent Location 3",
  ]);

  return (
    <View style={styles.container}>
      <View>
       <Menu/>
      </View>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <HomeMap />
      </View>
      <View style={styles.locationContainer}>
        <Text style={{ color: "#EE272E", fontWeight: 600, fontSize: 18, padding: 10 }}>Where are you going today?</Text>
        <Pressable style={styles.locationButton} onPress={goToSearch}>
          <Icon name="location-crosshairs" size={16} color="green" />
          <Text style={styles.locationText}>From Where</Text>
          {/* <Icon name="location-dot" size={20} color="#EE272E" style={{}} /> */}
        </Pressable>
        <Pressable style={styles.locationButton} onPress={goToSearch}>
          <Icon name="location-dot" size={16} color="#EE272E" />
          <Text style={styles.locationText}>To Where</Text>
          {/* <Icon name="location-dot" size={20} color="#EE272E" /> */}
        </Pressable>
      </View>


      <ScrollView style={styles.recentLocationsContainer}>
        {recentLocations.map((location, index) => (
          <Pressable
            key={index}
            style={{
              padding: 10,
              margin: 0,
            }}
            onPress={() => setDropLocation(location)}
          >
            <Text style={{ color: "gray", fontWeight: "bold" }}>{location}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        // onPress={onSubmit}
        style={{
          backgroundColor: "#EE272E",
          borderColor: "#EE272E",
          borderRadius: 40,
          padding: 18,
          margin: 10,
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Choose Vehicle
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  locationContainer: {
    flexDirection: 'column', // Change to column
  },
  locationButton: {
    padding: 14,
    backgroundColor: 'transparent',
    borderRadius: 40,
    alignItems: 'center',
    borderColor: 'red', // Set border color
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin:6

  },
  locationText: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
    alignItems:'center'
  },
  recentLocationsContainer: {
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 
});

export default HomeScreen;