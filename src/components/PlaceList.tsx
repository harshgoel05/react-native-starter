import { StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import React from "react";

export const PlaceList = (props: any) => {
  const lapsList = (props1: any) => {
    return props1.places.map((data: any, index: any) => {
      return (
        <ListItem
          key={index}
          onTouchHandler={() => {
            props.onDeletedhandler(index);
          }}
          placeName={data}
        />
      );
    });
  };
  return <View style={styles.listContainer}>{lapsList(props)}</View>;
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
