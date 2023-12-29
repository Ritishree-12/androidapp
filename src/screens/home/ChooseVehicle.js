import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import ItemComponent from "./ItemComponent";
import SearchResults from "../destinationsearch/SearchResult";
import RouteMap from "../../map/Routemap";


const ChooseVehicle = ({navigation}) => {
  const snapPoints = useMemo(() => ["60%"], []);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Dala Auto",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Small Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/choose2.png"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Tata Ace",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Medium Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/largeVeichle.png"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e278",
      title: "Pickup",
      imgDetails: "13.2ftx6.9ftx5.9ft",
      capacity: "capacity:900kg",
      weitage: "Large Pickup",
      itemDetails:
        "This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.",
      image: require("../../../assets/choose3.png"),
    },
  ];
  const [selectedId, setSelectedId] = useState();

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
      />
    );
  };

  return (
    <View style={styles.container}>
    {/* <SearchResults/>   */}
    <RouteMap />
      <BottomSheet
        //  index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.text1}>Choose Vehicle</Text>
          {/* <ScrollView> */}
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          {/* </ScrollView> */}

          <View style={{ flexDirection: "row" }}>
            <Text>Cash</Text>
            <Text>PromoCode</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.BookNow} >
              <Text style={styles.BookNowText}
              onPress={() => navigation.navigate("RequestScreen")}
              >Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ChooseVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  BookNowText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
