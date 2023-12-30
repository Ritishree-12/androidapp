import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for making HTTP requests
import PlaceRow from './PlaceRow';
const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const navigation = useNavigation();

  const checkNavigation = async () => {
    if (originPlace && destinationPlace) {
      try {
        const { distance, duration } = await getDistanceAndTime(
          originPlace.details.geometry.location,
          destinationPlace.details.geometry.location
        );
        console.log(`Distance: ${distance} km, Duration: ${duration}`);
        setDistance(distance);
        setDuration(duration);
        navigation.navigate('SearchResult', {
          originPlace,
          destinationPlace,
          distance,
          duration,
        });
      } catch (error) {
        console.error('Error calculating distance and time:', error.message);
      }
    }
  };
  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  const getDistanceAndTime = async (origin, destination) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.lat},${origin.lng}
    &destinations=${destination.lat},${destination.lng}&key=AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0`;
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      if (data.status === 'OK' && data.rows.length > 0 && data.rows[0].elements.length > 0) {
        const distance = data.rows[0].elements[0].distance.text;
        const duration = data.rows[0].elements[0].duration.text;
        return { distance, duration };
      } else {
        throw new Error('Error fetching distance and time.');
      }
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Your Current Location"
          styles={{
            // textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 0,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        
        {/* Circle near Origin input */}
        <View style={styles.circle} />
        {/* Line between dots */}
        <View style={styles.line} />
        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: 'green',
  },
  textInput: {
    height: 50,
    backgroundColor: 'red',
    paddingLeft: 16,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
  listView: {
    flex: 1,
    marginTop: 10,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#A2A2A2',
    padding: 8,
    borderRadius: 25,
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: 40,
    left: 10,
    borderRadius: 20,
  },
  line: {
    width: 2,
    height: 60,
    backgroundColor: '#C4C4C4',
    position: 'absolute',
    top: 60,
    left: 19,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    position: 'absolute',
    top: 120,
    left: 10,
    borderRadius: 4,
  },
});
export default DestinationSearch;