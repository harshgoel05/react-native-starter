import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import { PlaceList } from "./src/components/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail";
export default class App extends Component<any> {
  state = {
    places: [],
    selectedPlace: null,
  };
  placeAddedhandler = (placeName: any) => {
    if (placeName.trim() === "") {
      return;
    }
    this.setState((prevState: any) => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          value: placeName,
        }),
      };
    });
  };
  onPlaceSelectedHandler = (key: any) => {
    this.setState((prevState: any) => {
      return {
        selectedPlace: prevState.places.find((place: any) => place.key == key),
      };
    });
  };
  onItemDeletedHandler = () => {
    this.setState((prevState: any) => {
      return {
        places: prevState.places.filter(
          (place: any) => place.key != prevState.selectedPlace.key
        ),
        selectedPlace: null,
      };
    });
  };
  onModalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.onItemDeletedHandler}
          onModalClosed={this.onModalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedhandler}></PlaceInput>
        <PlaceList
          places={this.state.places}
          onItemSelected={this.onPlaceSelectedHandler}
        ></PlaceList>
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
