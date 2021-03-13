import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClauseNum = ({clause }) => {
console.log(clause, "my clause")
  return (
    <View style={styles.box}>
      <Text>{clause.clause}</Text>

      <Text>{clause.text}</Text>
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
