import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import ListItem from "./ListItem";
import React from "react";

export const PlaceList = (props: any) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => {
        return (
          <ListItem
            onTouchHandler={() => {
              props.onItemSelected(info.item.key);
            }}
            placeName={info.item.value}
          />
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
});
