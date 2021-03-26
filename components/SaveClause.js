import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ClauseContext from './ClauseContext';
const ClauseNum = (props) => {


  return (
    <TouchableOpacity >
      <View style={styles.box}>
        <Text style={styles.text}>{props.clause.clause}</Text>

        <Text style={styles.text}>{props.clause.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#268bd2",
  },
  text: {
    backgroundColor: "grey",
    width: "100%",
  },
});

export default ClauseNum;
