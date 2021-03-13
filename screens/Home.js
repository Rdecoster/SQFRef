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

// const DATA = fileFormatter(Aquaculture9)

// PrimaryAnimalProduction, StorageDistribution]
// const DATA = Aquaculture9;
// const DATA = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];
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
