import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ClauseNum from '../components/ClauseNum.js';

const SectionModule = ({ route }) => {
  const { module, moduleName } = route.params;
  const DATA = module;
  console.log(DATA, 'from section module.js');

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ClauseNum clause={item} name={module[item]} data={module[item]} />
        )}
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

export default SectionModule;
