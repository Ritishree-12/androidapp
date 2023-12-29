// import React, { useState } from "react";
// import { View, Image, Text, Pressable, StyleSheet, FlatList } from "react-native";

// import Ionicons from "react-native-vector-icons/Ionicons";
// import ItemComponent from "../home/ItemComponent";

// const TruckRow = (props) => {
//   const { type, onPress, isSelected } = props;

//   const getImage = () => {
//     if (type.type === 'Dala Auto') {
//       return require('../../../assets/choose1.png');
//     }
//     if (type.type === 'Large Truck') {
//       return require('../../../assets/choose2.png');
//     }
//     return require('../../../assets/largeVeichle.png');
//   }


//   const DATA = [
//     {
//       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//       title: "Dala Auto",
//       imgDetails: "13.2ftx6.9ftx5.9ft",
//       capacity: "capacity:900kg",
//       weitage: "Small Pickup",
//       itemDetails:
//         "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
//       image: require("../../../assets/choose2.png"),
//     },
//     {
//       id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//       title: "Tata Ace",
//       imgDetails: "13.2ftx6.9ftx5.9ft",
//       capacity: "capacity:900kg",
//       weitage: "Medium Pickup",
//       itemDetails:
//         "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
//       image: require("../../../assets/largeVeichle.png"),
//     },
//     {
//       id: "58694a0f-3da1-471f-bd96-145571e278",
//       title: "Pickup",
//       imgDetails: "13.2ftx6.9ftx5.9ft",
//       capacity: "capacity:900kg",
//       weitage: "Large Pickup",
//       itemDetails:
//         "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
//       image: require("../../../assets/choose3.png"),
//     },
//   ];
//   const [selectedId, setSelectedId] = useState();

//   const renderItem = ({ item }) => {
//     const isSelected = item.id === selectedId;
//     const backgroundColor = isSelected ? "#EE272E" : "transparent";
//     const textColor = isSelected ? "white" : "#EE272E";

//     return (
//       <ItemComponent
//         item={item}
//         onPress={() => setSelectedId(isSelected ? null : item.id)}
//         backgroundColor={backgroundColor}
//         textColor={textColor}
//       />
//     );
//   };
//   return (
//     <View style={styles.bottomSheetContent}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   bottomSheetContent: {
//     flex: 1,
//   },
//   text1: {
//     color: "#EE272E",
//     fontWeight: "600",
//     fontSize: 20,
//     paddingHorizontal: 20,
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     alignItems: "center",
//   },
//   BookNow: {
//     backgroundColor: "#EE272E",
//     padding: 16,
//     borderRadius: 30,
//     alignItems: "center",
//     margin: 8,
//     width: 340,
//   },
//   BookNowText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
// export default TruckRow;


// TruckRow.js
import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ItemComponent from "../home/ItemComponent";

const TruckRow = (props) => {
  const { data, renderItem, selectedId, setSelectedId } = props;

  return (
    <View style={styles.bottomSheetContent}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    flex: 1,
  },
});

export default TruckRow;
