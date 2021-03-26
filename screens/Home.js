import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Aquaculture9 from './../assets/datajs/Aquaculture9.js';
import PrimaryAnimalProduction from './../assets/datajs/PrimaryAnimalProduction.js';
import StorageDistribution from './../assets/datajs/StorageDistribution.js';
import ClauseContext from '../components/ClauseContext.js';

let list = [Aquaculture9, PrimaryAnimalProduction, StorageDistribution];

let transformed = list.map((item) => {
  let object = {};
  object.cheese = fileFormatter(item);
  return object;
});

const DATA = transformed;

const Home = ({ navigation }) => {
  const [savedClause, addClause] = React.useContext(ClauseContext);
  console.log(savedClause, 'saved clause in home.js');
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      // keyExtractor={item => item[0][0]}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('sub', {
              moduleName: item.cheese.name,
              module: item.cheese,
            });
          }}
        >
          <Text style={styles.list}>{item.cheese.name}</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookedMarked', {
              module: savedClause,
              moduleName: 'testname for bookedmark',
            });
          }}
        >
          <Text>Lanuch Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

function nextClause(arrObj) {
  let primary;
  let secondary;
  let obj = {};
  obj[primary] = {};
  obj.name = arrObj[0].clause;

  for (var i = 1; i < arrObj.length; i++) {
    if (obj[primary] === undefined) {
      obj[primary] = {};
      obj[primary].name = arrObj[i - 1].text;
    }
    if (arrObj[i].clause.split('.').length === 2) {
      primary = arrObj[i].clause;
    }
    if (arrObj[i].clause.split('.').length === 3) {
      secondary = arrObj[i].clause;
    }
    if (arrObj[i].clause.split('.').length === 4) {
      if (obj[primary][secondary] === undefined) {
        obj[primary][secondary] = [];
        obj[primary][secondary].name = arrObj[i - 1].text;
      }

      obj[primary][secondary].push(arrObj[i]);
    }
  }
  return obj;
}

function fileFormatter(arr) {
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    let newObj = {};

    newObj.clause = arr[i][0];
    newObj.text = arr[i][1];
    newArr.push(newObj);
  }
  return nextClause(newArr);
}

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
export default Home;
