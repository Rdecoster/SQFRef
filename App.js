import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ClauseNum from './components/ClauseNum.js';

import Data from './assets/datajs/Aquaculture9.js';

let COLORS = Data;
const App = () => {
  return (
    <SafeAreaView>
      {/* <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ClauseNum />
      </View> */}
      <FlatList
        data={COLORS}
        renderItem={({ item }) => <ClauseNum clause={item} />}
        style={styles.container}
        ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
