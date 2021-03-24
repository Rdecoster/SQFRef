import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClauseNum = (props) => {
  console.log('Hi from clause num component', props);

  // console.log(module, 'from clause num screen');
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.clause.clause}</Text>

      <Text style={styles.text}>help{props.clause.text}</Text>
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
  text: {
    backgroundColor: 'grey',
    width: '100%',
  },
});

export default ClauseNum;
