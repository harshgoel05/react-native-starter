import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { Container, Header, Content } from "native-base";
import ListItem from "./src/components/list";
export default class App extends Component {
  state = {
    placeName: "",
    places: [],
  };
  handleChange = (event: any) => {
    this.setState({
      placeName: event,
    });
  };
  onPress = () => {
    this.setState((prevState: any) => {
      if (this.state.placeName.trim() === "") {
        return;
      }
      // this.setState({
      //   placeName: "",
      // });
      return {
        places: prevState.places.concat(prevState.placeName),
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
        <View style={styles.placeCont}>
          <TextInput
            onChangeText={this.handleChange}
            style={styles.placeInput}
            value={this.state.placeName}
          ></TextInput>
          <Button onPress={this.onPress} title="Click" />
        </View>
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
  listContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
