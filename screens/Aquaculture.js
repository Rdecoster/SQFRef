import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import ClauseNum from '../components/ClauseNum.js'

// rename Aquaculture to modules or something distingishing?

const Aquaculture9 = ({ route }) => {
  // destructured the props from navigation see homepage
  const { module, moduleName } = route.params;
  console.log(route)
  return (
    <SafeAreaView>
      <FlatList
        data={module}
        renderItem={( {item} ) => <ClauseNum clause={item} />}
        style={styles.container}
        ListHeaderComponent={<Text style={styles.text}>test</Text>}
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
