import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const listItem = (props: any) => (
  <TouchableWithoutFeedback onPress={props.onTouchHandler}>
    <View style={styles.listItem}>
      <Text> {props.placeName} </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    width: "100%",
    backgroundColor: "#eee",
    margin: 3,
  },
});
export default listItem;
