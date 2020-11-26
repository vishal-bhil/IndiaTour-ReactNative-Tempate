import React, { Component } from "react";
import AppNavigator from "./src/router/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      OxygenRegular: require("./src/fonts/OxygenRegular.ttf"),
      OxygenBold: require("./src/fonts/OxygenBold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppNavigator />;
    } else {
      return <AppLoading />;
    }
  }
}

//https://www.uplabs.com/posts/tourism-application-5096341c-c19f-448d-9367-66b15a100065
