import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Aquaculture9 from './../assets/datajs/Aquaculture9.js';
import PrimaryAnimalProduction from './../assets/datajs/PrimaryAnimalProduction.js';
import StorageDistribution from './../assets/datajs/StorageDistribution.js';

let list = [Aquaculture9,PrimaryAnimalProduction, StorageDistribution];

let transformed = list.map((item) => {
  let object = {};
  object.cheese = fileFormatter(item);
  return object;
});

const DATA = transformed;
console.log(DATA, 'Data');

const Home = ({ navigation }) => {
  // console.log('my data', DATA)
  return (
    <FlatList
    style = {styles.container}
      data={DATA}
      // keyExtractor={item => item[0][0]}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('test', {
              moduleName: item.cheese[0].clause,
              module: item.cheese,
            });
          }}
        >
          <Text style = {styles.list}>{item.cheese[0].clause}</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={<TouchableOpacity onPress={()=> {navigation.navigate('BookedMarked')}}>
        <Text>
          Lanuch Modal
        </Text>
      </TouchableOpacity>}
    />
  );
};

function fileFormatter(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    let newObj = {};
    newObj.clause = arr[i][0];
    newObj.text = arr[i][1];
    newArr.push(newObj);
  }

  return newArr;
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
  }
})
export default Home;
