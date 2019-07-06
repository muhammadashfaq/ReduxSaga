import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
