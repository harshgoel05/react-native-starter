import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { Container, Header, Content } from "native-base";
import ListItem from "./src/components/ListItem";
import PlaceInput from "./src/components/PlaceInput";
import { PlaceList } from "./src/components/PlaceList";
export default class App extends Component<any> {
  state = {
    places: [],
  };
  placeAddedhandler = (placeName: any) => {
    this.setState((prevState: any) => {
      return {
        places: prevState.places.concat(placeName),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedhandler}></PlaceInput>
        <PlaceList places={this.state.places}></PlaceList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
});
