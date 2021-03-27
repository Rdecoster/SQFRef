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
import LeftActions from './LeftActions.js';

// const LeftActions = ({ progress, dragX, onPress }) => {
//   const scale = dragX.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.leftActions}>
//         <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
//           Add to Bookmark
//         </Animated.Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const ClauseNum = ({ clause, onSwipeFromLeft }) => {
  const [savedClause, addClause] = useContext(ClauseContext);
  function AddClause() {
    addClause([...savedClause, { clause: clause.clause, text: clause.text }]);
  }

  return (
    <Swipeable
      renderLeftActions={(progress, dragX, onPress) => (
        <LeftActions
          progress={progress}
          dragX={dragX}
          onPress={AddClause}
          text={'Add to bookmark'}
          color="green"
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

export default ClauseNum;
