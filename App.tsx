import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  state = {
    name: "hi",
  };
  handleChange = (event: any) => {
    console.log(event);
    this.setState({
      name: event,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TextInput
          style={styles.inp}
          value={this.state.name}
          onChangeText={this.handleChange}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inp: {
    borderWidth: 1,
    borderColor: "green",
    minWidth: 100,
  },
});
