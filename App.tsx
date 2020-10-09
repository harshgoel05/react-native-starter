import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { Container, Header, Content } from "native-base";
import ListItem from "./src/components/list";
import PlaceInput from "./src/components/PlaceInput";
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
  lapsList() {
    return this.state.places.map((data, index) => {
      return <ListItem key={index}>{data}</ListItem>;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedhandler}></PlaceInput>
        <View style={styles.listContainer}>{this.lapsList()}</View>
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
  listContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
