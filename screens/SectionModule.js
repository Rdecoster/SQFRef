import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ClauseNum from '../components/ClauseNum.js';

// rename Aquaculture to modules or something distingishing?

const SectionModule = ({ route }) => {
  console.log('hello from submenu/home');
  const { module, moduleName } = route.params;
  const DATA = module;

  return (
    <SafeAreaView>
      section modeule
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ClauseNum clause={item} name={module[item]} data={module[item]} />
          </TouchableOpacity>
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
