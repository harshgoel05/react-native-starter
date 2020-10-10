import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = (props: any) => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Text style={styles.heading}>Details</Text>
        <Text>{props.selectedPlace ? props.selectedPlace.value : null}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>{modalContent}</View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button onPress={props.onItemDeleted} title={"Delete"} color="red" />
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={props.onModalClosed} title={"Close"} color="blue" />
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 50,
    marginBottom: 30,
    textAlign: "center",
  },
});
