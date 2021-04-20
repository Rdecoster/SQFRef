import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClauseContext from './ClauseContext';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import LeftActions from './LeftActions.js';
const SaveClause = ({ clause, onSwipeFromLeft, deleteFunction }) => {
  function AddClause() {
    console.log('I was clicked!!!!!!!', clause.id);
    deleteFunction(clause.id);
  }

  return (
    <Swipeable
      renderLeftActions={(progress, dragX, onPress) => (
        <LeftActions
          progress={progress}
          dragX={dragX}
          onPress={AddClause}
          text={'Delete'}
          color="red"
        />
      )}
    >
      <View style={styles.box}>
        <Text style={styles.text}>{clause.clause}</Text>

        <Text style={styles.text}>{clause.text}</Text>
      </View>
    </Swipeable>
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

export default SaveClause;
