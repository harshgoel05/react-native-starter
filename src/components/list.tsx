import React from "react";
import { View, Text, StyleSheet } from "react-native";

const listItem = (props: any) => {
  console.log(props.children);
  return (
    <View style={styles.listItem}>
      <Text> {props.children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    width: "100%",
    backgroundColor: "#eee",
    margin: 3,
  },
});
export default listItem;
