import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Color from "../constants/color";
import { placeList } from "../data/placelist";

class RecentItem extends Component {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.riContainer} onPress={onPress}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 150, width: 130, resizeMode: "cover" }}
        />
        <View style={{ padding: 10 }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCountry}>{item.country}</Text>
          <Text style={styles.itemCountry}>{`From ${item.price}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class TopPlaceItem extends Component {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.tiContainer} onPress={onPress}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 130, width: 160, resizeMode: "cover" }}
        />
        <View style={{ padding: 10, flexGrow: 1 }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCountry}>{item.country}</Text>
          <Text style={styles.itemCountry}>{`From ${item.price}`}</Text>
        </View>
        <LinearGradient
          colors={["#596096", "#3A3E60"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{ padding: 10, justifyContent: "center" }}
        >
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={Color.white}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <LinearGradient
          colors={["#596096", "#3A3E60"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.gredientBGcontainer}
        >
          <View style={styles.headerTitleContainer}>
            <View>
              <Text style={styles.headerText("OxygenRegular")}>Find Your</Text>
              <Text style={styles.headerText("OxygenBold")}>
                Next Destination
              </Text>
            </View>
            <Image style={styles.headerImage} />
          </View>
          <View style={styles.searchContainer}>
            <Ionicons name="ios-search" size={25} color={Color.darkGreen} />
            <TextInput
              placeholder="Search destination"
              style={styles.searchInput}
            />
          </View>
        </LinearGradient>
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <View style={styles.recentTextContainer}>
            <Text style={styles.txtRecent}>Recent</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.txtRecent}>See all</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} />
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              data={placeList}
              renderItem={({ item }) => (
                <RecentItem
                  item={item}
                  onPress={() => this.props.navigation.navigate("Detail")}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={styles.tabContainer}>
            <Text style={styles.tabItemText(true)}>Top Places</Text>
            <Text style={styles.tabItemText(false)}>Top Hotels</Text>
            <Text style={styles.tabItemText(false)}>Recent Place</Text>
          </View>
          <FlatList
            data={placeList}
            renderItem={({ item }) => (
              <TopPlaceItem
                item={item}
                onPress={() => this.props.navigation.navigate("Detail")}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>

        <View style={styles.bottomLayoutContainer}>
          <Ionicons name="ios-home" size={25} color={Color.darkGreen} />
          <Ionicons name="ios-person" size={25} color={Color.grey} />
          <Ionicons name="ios-airplane" size={25} color={Color.grey} />
          <Ionicons name="ios-business" size={25} color={Color.grey} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gredientBGcontainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: (font) => ({
    color: Color.white,
    fontSize: 20,
    fontFamily: font,
  }),
  headerImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Color.white,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  searchInput: {
    paddingHorizontal: 10,
    color: Color.darkGreen,
    fontSize: 15,
    fontFamily: "OxygenRegular",
  },
  bottomLayoutContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Color.white,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  recentTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  txtRecent: {
    fontFamily: "OxygenBold",
    fontSize: 17,
    color: Color.black,
  },

  //Recent Item
  riContainer: {
    backgroundColor: Color.white,
    marginEnd: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  itemName: {
    fontFamily: "OxygenBold",
    color: Color.darkGreen,
    fontSize: 17,
  },
  itemCountry: {
    fontFamily: "OxygenRegular",
    color: Color.darkGreen,
    fontSize: 15,
    marginTop: 2,
  },
  //Tab
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  tabItemText: (isSelected) => ({
    fontFamily: "OxygenBold",
    fontSize: 17,
    color: isSelected ? Color.primary : Color.black,
  }),
  //Top Place Item
  tiContainer: {
    backgroundColor: Color.white,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
});

export default DashboardScreen;
