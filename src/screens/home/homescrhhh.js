import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker, Polyline } from "react-native-maps";

const HomeScreen = ({ navigation }) => {
  const snapPoints = useMemo(() => ["50%", "70%"], []);

  const [fromLocation, setFromLocation] = useState({
    name: "From Location",
    latitude: 25.2967,
    longitude: 87.8246,
  });
  const [toLocation, setToLocation] = useState({
    name: "To Location",
    latitude: 20.218,
    longitude: 85.805,
  });

  const suggestedDropLocation = {
    latitude: 25.0, // Replace with the actual latitude
    longitude: 85.0, // Replace with the actual longitude
  };

  const handleChooseVehicle = () => {
    navigation.navigate("ChooseVehicle");
  };

  const handleMarkerPress = (location) => {
    console.log("Marker Pressed:", location);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: fromLocation?.latitude || 0,
          longitude: fromLocation?.longitude || 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {fromLocation && (
          <Marker
            coordinate={fromLocation}
            title="From Location"
            onPress={() => handleMarkerPress(fromLocation)}
          />
        )}
        {toLocation && (
          <Marker
            coordinate={toLocation}
            title="To Location"
            onPress={() => handleMarkerPress(toLocation)}
          />
        )}

        <Polyline
          coordinates={[
            {
              latitude: fromLocation.latitude,
              longitude: fromLocation.longitude,
            },
            {
              latitude: toLocation?.latitude || 0,
              longitude: toLocation?.longitude || 0,
            },
          ]}
          strokeColor="black"
          strokeWidth={3}
        />
      </MapView>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={styles.bottomSheetContainer}>
          <Text style={styles.text1}>Where are you going today?</Text>
          <View style={styles.searchContainer}>
            <View style={styles.autocompleteContainer}>
              <GooglePlacesAutocomplete
                placeholder="Pickup location"
                defaultValue={fromLocation.name}
                onPress={(data, details) => {
                  setFromLocation({
                    name: details.formatted_address,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }}
                query={{
                  key: "YOUR_API_KEY", // Replace with your Google Maps API key
                  language: "en",
                }}
                fetchDetails={true}
                onFail={(error) =>
                  console.error("Prediction request failed", error)
                }
                onNotFound={() => console.warn("No predictions found")}
                renderRightButton={() => (
                  <Text style={styles.autocompleteIcon}>🔍</Text>
                )}
                renderDescription={(data) => {
                  const { description } = data;
                  return (
                    <Text style={styles.autocompleteDescription}>
                      {description}
                    </Text>
                  );
                }}
                enablePoweredByContainer={false}
              />
            </View>

            <View style={styles.autocompleteContainer}>
              <GooglePlacesAutocomplete
                placeholder="Drop-off location"
                defaultValue={toLocation.name}
                onPress={(data, details) => {
                  setToLocation({
                    name: details.formatted_address,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }}
                query={{
                  key: "AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0", // Replace with your Google Maps API key
                  language: "en",
                }}
                fetchDetails={true}
                onFail={(error) =>
                  console.error("Prediction request failed", error)
                }
                onNotFound={() => console.warn("No predictions found")}
                renderRightButton={() => (
                  <Text style={styles.autocompleteIcon}>🔍</Text>
                )}
                renderDescription={(data) => {
                  const { description } = data;
                  return (
                    <Text style={styles.autocompleteDescription}>
                      {description}
                    </Text>
                  );
                }}
                enablePoweredByContainer={false}
              />
            </View>
          </View>

          <Text style={styles.recentPlacesText}>Recent Places</Text>
          <View>
            <Text style={styles.recentPlacesText}>01 Places</Text>
            <Text style={styles.recentPlacesText}>02 Places</Text>
          </View>

          <Pressable
            style={styles.chooseVehicleButton}
            onPress={handleChooseVehicle}
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentPlacesText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  autocompleteContainer: {
    marginBottom: 20,
  },
  chooseVehicleButton: {
    backgroundColor: "#EE272E",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  chooseVehicleButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    borderRadius: 40,
    marginTop: 5,
    width: "100%",
  },
  autocompleteIcon: {
    marginRight: 10,
  },
  autocompleteDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
