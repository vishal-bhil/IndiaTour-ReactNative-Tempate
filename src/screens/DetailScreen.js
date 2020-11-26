import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Color from "../constants/color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { backwatersImage } from "../data/placelist";
import { LinearGradient } from "expo-linear-gradient";

class SelectOptionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ScrollView>
          <Image
            source={{
              uri:
                "https://www.dookinternational.com/blog/wp-content/uploads/2017/06/a23.jpg",
            }}
            style={{ width: 500, height: 400 }}
          />
          <View style={{ padding: 20 }}>
            <Text style={styles.titleStyle}>Backwaters</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={styles.priceHint}>Available flight : </Text>
              <Text style={styles.priceValue}> 18 April 2020</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.priceHint}>Price range : </Text>
              <Text style={styles.priceValue}> $3000 - $8000</Text>
            </View>
            <Text style={styles.txtPhotoGellery}>Photogellery</Text>
            <FlatList
              horizontal
              data={backwatersImage}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.image }}
                  style={styles.imageListItem}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.txtPhotoGellery}>About</Text>
            <Text style={styles.txtAbout}>
              The Kerala backwaters are a network of brackish lagoons and lakes
              lying parallel to the Arabian Sea coast of Kerala state in
              southern India, as well as interconnected canals, rivers, and
              inlets, a labyrinthine system formed by more than 900 kilometres
              of waterways, and sometimes compared to American bayous.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomLayoutContainer}>
          <View style={styles.favButton}>
            <MaterialIcons
              name="favorite-border"
              size={30}
              color={Color.white}
            />
          </View>
          <LinearGradient
            colors={["#596096", "#3A3E60"]}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.bookButton}
          >
            <Text style={styles.txtBook}>Start Booking your Trip</Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontFamily: "OxygenBold",
    fontSize: 25,
    color: Color.black,
  },
  priceHint: {
    fontFamily: "OxygenBold",
    fontSize: 18,
    color: Color.darkGreen,
  },
  priceValue: {
    fontFamily: "OxygenRegular",
    fontSize: 15,
    color: Color.lightGreen,
  },
  txtPhotoGellery: {
    fontFamily: "OxygenBold",
    fontSize: 20,
    color: Color.black,
    marginVertical: 20,
  },
  imageListItem: {
    width: 100,
    height: 100,
    marginEnd: 10,
    borderRadius: 10,
  },
  txtAbout: {
    fontFamily: "OxygenRegular",
    fontSize: 15,
    color: Color.black,
    marginBottom: 100,
  },
  bottomLayoutContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    flexDirection: "row",
  },
  favButton: {
    backgroundColor: Color.darkGreen,
    padding: 15,
    borderRadius: 20,
  },
  bookButton: {
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
    marginStart: 20,
  },
  txtBook: {
    fontFamily: "OxygenBold",
    fontSize: 20,
    color: Color.white,
  },
});

export default SelectOptionScreen;
