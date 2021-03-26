import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import ClauseContext from './ClauseContext';

import Swipeable from 'react-native-gesture-handler/Swipeable';
const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.leftActions}>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Add to Bookmark
      </Animated.Text>
    </View>
  );
};

const ClauseNum = (props) => {
  const [savedClause, addClause] = useContext(ClauseContext);
  function AddClause() {
    console.log('I was clicked!!!!!!!', props);

    addClause([
      ...savedClause,
      { clause: props.clause.clause, text: props.clause.text },
    ]);
  }

  return (
    <Swipeable renderLeftActions={LeftActions} onSwipeableLeftOpen={AddClause}>
      <View style={styles.box}>
        <Text style={styles.text}>{props.clause.clause}</Text>

        <Text style={styles.text}>{props.clause.text}</Text>
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
  leftActions: {
    backgroundColor: 'green',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});

export default ClauseNum;
