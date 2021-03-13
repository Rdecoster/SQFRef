import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import ClauseNum from '../components/ClauseNum.js'
import Data from './../assets/datajs/Aquaculture9.js';

const COLORS = Data
const Aquaculture9 = () => {

  return (
    <SafeAreaView>
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


export default Aquaculture9;
