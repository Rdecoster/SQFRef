import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClauseNum = (props) => {
  console.log(props,"myclause")
  return (
    <View style={styles.box}>
      <Text>  {props.clause[0]}
      </Text>
      <Text>{props.clause[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#268bd2',
  },
});

export default ClauseNum;