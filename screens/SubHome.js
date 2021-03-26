import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ClauseNum from '../components/ClauseNum.js';

const SubMenu = ({ navigation, route }) => {
  const { module, moduleName } = route.params;
  const DATA = Object.keys(module);
  DATA.shift();
  DATA.shift();

  console.log(DATA, 'From subhome');
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      // keyExtractor={item => item[0][0]}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('sub3', {
              moduleName: `${module[item].name} ${item}`,
              module: module[item],
            });
          }}
        >
          <Text style={styles.list}>{`${module[item].name} ${item}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'grey',
  },
  container: {
    paddingHorizontal: 10,
  },
});
export default SubMenu;
