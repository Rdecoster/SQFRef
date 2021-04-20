import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ClauseNum from '../components/ClauseNum.js';
import SaveClause from '../components/SaveClause.js';

const BookedMarked = (props) => {
  console.log(props, ' props from book mark ');
  const module = props.route.params.module;
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(module);
  }, [module]);

  const deleteClause = (id) => {
    console.log(id, 'my list from the delete function!!!!!!!!!!!');
    list.forEach((item, i) => {
      if (item.id === id) {
        list.splice(i, 1);
      }
    });
    console.log(list, 'after delete');
    setList(list);
  };
  const DATA = module;
  console.log(DATA, 'from section module.js');

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <SaveClause
              clause={item}
              name={module[item]}
              data={module[item]}
              deleteFunction={deleteClause}
            />
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
export default BookedMarked;
