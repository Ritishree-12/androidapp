import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
  coordinate={{
    latitude: originLoc.latitude,
    longitude: originLoc.longitude,
  }}
  title={'Origin'}
/>

<Marker
  coordinate={{
    latitude: destinationLoc.latitude,
    longitude: destinationLoc.longitude,
  }}
  title={'Destination'}
/>
    </MapView>
  );
};

export default RouteMap;


// import React from "react";
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// // const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';


// const RouteMap = () => {
//   const origin = { latitude: 28.450627, longitude: -16.263045 };
//   const destination = { latitude: 28.460127, longitude: -16.269845  };
//   const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';
//   // const GOOGLE_MAPS_APIKEY = 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ';

//   return (
//     <>
//       <MapView
//         style={{ width: '100%', height: '100%' }}
//         provider={PROVIDER_GOOGLE}
//         showsUserLocation={true}
//         initialRegion={{
//           latitude: 28.450627,
//           longitude: -16.263045,
//           latitudeDelta: 0.0222,
//           longitudeDelta: 0.0121,
//         }}>
//         <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey={GOOGLE_MAPS_APIKEY}
//           strokeWidth={3}
//           strokeColor="hotpink"
//         />
//         <Marker
//           coordinate={origin}
//           title={'Origin'}
//         />
//         <Marker
//           coordinate={destination}
//           title={"Destination"}
//         />
//       </MapView>
//     </>
//   );
// };

// export default RouteMap;

