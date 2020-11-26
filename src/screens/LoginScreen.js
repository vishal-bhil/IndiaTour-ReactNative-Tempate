import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  CheckBox,
} from "react-native";
import { Checkbox } from "galio-framework";
import Buttton from "../components/Buttton";

import Color from "../constants/color";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Color.primary}
          translucent={true}
        />
        <Text style={styles.txtLoginWith}>Login With Facebook</Text>
        <Text style={styles.inputHint}>Email ID or Mobile Number</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value="johndeo@mail.com"
        />
        <Text style={styles.inputHint}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.inputStyle}
          value="123456"
          secureTextEntry
        />
        <View style={styles.forgotPassContainer}>
          <View style={{ flexDirection: "row" }}>
            <Checkbox color={Color.darkGreen} label="" />
            <Text style={styles.txtForgotPass}>Remember me</Text>
          </View>
          <Text style={styles.txtForgotPass}>Forgot password?</Text>
        </View>
        <Buttton
          title="Login to my account"
          buttonContainer={{ marginTop: 50 }}
          onPress={() => {
            this.props.navigation.navigate("Dashboard");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  txtLoginWith: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "OxygenRegular",
    color: Color.inputTextColor,
    marginBottom: 40,
  },
  inputHint: {
    fontSize: 15,
    fontFamily: "OxygenRegular",
    color: Color.inputHintColor,
    marginTop: 20,
  },
  inputStyle: {
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 15,
    fontFamily: "OxygenRegular",
    color: Color.inputTextColor,
  },
  forgotPassContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  txtForgotPass: {
    fontSize: 15,
    fontFamily: "OxygenRegular",
    color: Color.darkGreen,
    marginStart: 10,
  },
});

export default LoginScreen;
