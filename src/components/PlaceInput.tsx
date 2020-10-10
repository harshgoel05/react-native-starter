import React, { Component } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

export default class PlaceInput extends Component<any> {
  state = {
    placeName: "",
  };
  placeNameChangeHandler = (event: any) => {
    this.setState({
      placeName: event,
    });
  };

  render() {
    return (
      <View style={styles.placeCont}>
        <TextInput
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}
          value={this.state.placeName}
        ></TextInput>
        <Button
          onPress={() => {
            this.props.onPlaceAdded(this.state.placeName);
            this.setState({
              placeName: "",
            });
          }}
          title="Click"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    borderColor: "blue",
    borderWidth: 1,
    width: "70%",
    padding: 3,
  },
  placeButton: {
    width: "30%",
  },
});
