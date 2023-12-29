// import React from "react";
// import { View, Text, Pressable,StyleSheet } from "react-native";
// import TruckRow from './TruckRow';

// import typesData from '../../data/type';

// const TruckTypes = ({ typeState, onSubmit }) => {
//   const [selectedType, setSelectedType] = typeState;

//   return (
//     <View>
//       {typesData.map((type) => (
//         <TruckRow
//           type={type}
//           key={type.id}
//           isSelected={type.type === selectedType}
//           onPress={() => setSelectedType(type.type)}
//         />
//       ))}

//       <Pressable onPress={onSubmit} style={{
//         backgroundColor: 'red',
//         borderRadius:20,
//         padding: 10,
//         margin: 10,
//         alignItems: 'center',
//         borderWidth:1,
//       }}>
//         <Text style={{color: 'white', fontWeight: 'bold'}}>
//           Book Now
//         </Text>
//       </Pressable>
//     </View>
//   );
// };

// export default TruckTypes;

import React,{useState} from "react";
import { View, Text, Pressable,StyleSheet } from "react-native";
import TruckRow from './TruckRow';
import ItemComponent from "../home/ItemComponent";

// import typesData from '../../data/type';

const TruckTypes = ({onSubmit,distance, duration}) => {
  const [selectedId, setSelectedId] = useState();
 
    const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      truckType: "dalaauto",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Small Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/choose2.png"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
     truckType: "tataace",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Medium Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/largeVeichle.png"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e278",
     truckType: "small_pickup",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Large Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/choose3.png"),
    },
  ];
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? "#EE272E" : "transparent";
    const textColor = isSelected ? "white" : "#EE272E";

    return (
      <ItemComponent
        item={item}
        onPress={() => setSelectedId(isSelected ? null : item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
        distance={distance} 
        duration={duration}
      />
    );
  };

  return (
    <View style={styles.container}>
    <Text style={styles.text1}>Choose a Vehicle</Text>
      <TruckRow
        data={DATA}
        renderItem={renderItem}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Pressable onPress={onSubmit} style={{
       backgroundColor: "#EE272E",
       borderColor: "#EE272E",
       borderRadius: 40,
       padding: 20,
       margin: 10,  // Check this margin
       alignItems: 'center',
       borderWidth: 1,
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Book Now
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
    // padding:8,
  },
  map: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
  },
  text1: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  BookNow: {
    backgroundColor: "#EE272E",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    margin: 8,
    width: 340,
    borderColor:"#EE272E",
  },
  BookNowText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default TruckTypes;

