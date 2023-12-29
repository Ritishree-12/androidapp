// import React, { useState } from 'react';
// import { View, Dimensions, Alert } from 'react-native';
// // import { API, graphqlOperation, Auth } from 'aws-amplify';
// import RouteMap from "../../map/Routemap";
// // import { createOrder } from '../../graphql/mutations';

// import { useRoute} from '@react-navigation/native';
// import TruckTypes from '../trucktypes/TruckTypes';
// // import ChooseVehicle from '../home/ChooseVehicle';

// const SearchResult = (props) => {
//   const typeState = useState(null);

//   const route = useRoute();
  
//   console.log(route.params,'details')
//   const { originPlace, destinationPlace } = route.params

//   const onSubmit = async () => {
//     const [type] = typeState;
//     if (!type) {
//       return;
//     }

//     // submit to server
//     // try {
//     //   const userInfo = await Auth.currentAuthenticatedUser();

//     //   const date = new Date();
//     //   const input = {
//     //     createdAt: date.toISOString(),
//     //     type,
//     //     originLatitude: originPlace.details.geometry.location.lat,
//     //     oreiginLongitude: originPlace.details.geometry.location.lng,

//     //     destLatitude: destinationPlace.details.geometry.location.lat,
//     //     destLongitude: destinationPlace.details.geometry.location.lng,

//     //     userId: userInfo.attributes.sub,
//     //     carId: "1",
//     //     status: "NEW",
//     //   }

//     //   const response = await API.graphql(
//     //     graphqlOperation(
//     //       createOrder, {
//     //         input: input
//     //       },
//     //     )
//     //   )

//     //   console.log(response);

//     //   navigation.navigate('OrderPage', { id: response.data.createOrder.id });
//     // } catch (e) {
//     //   console.error(e);
//     // }
//   }

//   return (
//     // <View style={{ flex: 1 }}>
//     //   <ChooseVehicle
//     //     origin={originPlace}
//     //     destination={destinationPlace}
//     //   />
//     // </View>
//     <View style={{display: 'flex', justifyContent: 'space-between'}}>
//       <View style={{height: Dimensions.get('window').height - 400}}>
//         <RouteMap 
//         origin={originPlace}
//          destination={destinationPlace} 
//          />
//       </View>

//       <View style={{height: 400}}>
//         <TruckTypes typeState={typeState} onSubmit={onSubmit} />
//       </View>
//     </View>
//   );
// };

// export default SearchResult;

import React, { useState, useEffect } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import axios from 'axios';
import RouteMap from "../../map/Routemap";
import TruckTypes from '../trucktypes/TruckTypes';
// import { useRoute } from '@react-navigation/native';

const SearchResult = ({ route }) => {
  const typeState = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);

  // const route = useRoute();
  
  console.log(route.params, 'details');
  // const { originPlace, destinationPlace } = route.params;
  const { originPlace, destinationPlace, distance, duration } = route.params;

  const onSubmit = async () => {
  // Ensure pickupLocation and dropLocation are available
  if (pickupLocation && dropLocation) {
    // Get the token from wherever it is stored (e.g., localStorage, cookies, etc.)
    const token = 'your_token_here';  // Replace 'your_token_here' with the actual token
    
    // Make a POST request to your server to submit the data with the token in the header
    axios.post('http://13.200.75.208:4001/v1/book/create_new_booking', {
      pickupLocation,
      dropLocation,
      // Include any other necessary data
    }, {
      headers: {
        'Authorization': `Bearer ${token}`  // Include the token in the 'Authorization' header
      }
    })
    .then(response => {
      // Handle success
      console.log('Submission successful:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error submitting data:', error);
    });
  } else {
    // Handle the case where pickupLocation or dropLocation is not available
    console.error('Pickup or drop location not available.');
  }
};

  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <RouteMap
          origin={pickupLocation || originPlace}
          destination={dropLocation || destinationPlace}
          onSubmit={onSubmit}
        />
      </View>

      <View style={{ height: 400 }}>
        <TruckTypes 
        typeState={typeState} 
        distance={distance} 
        duration={duration}
         />
      </View>
    </View>
  );
};

export default SearchResult;

