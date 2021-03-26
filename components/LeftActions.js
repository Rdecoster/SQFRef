import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import ClauseContext from './ClauseContext';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const LeftActions = ({ progress, dragX, onPress, text }) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.leftActions]}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          {text}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  leftActions: {
    backgroundColor: 'green',
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'flex-end',
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});
export default LeftActions;
