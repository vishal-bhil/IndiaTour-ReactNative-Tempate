import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../constants/color";

class Button extends Component {
  render() {
    const { title, buttonContainer, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={buttonContainer}>
        <LinearGradient
          style={styles.buttonContainer}
          colors={["#596096", "#3A3E60"]}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "OxygenBold",
    color: Color.white,
  },
});

export default Button;
