import { StatusBar } from 'expo-status-bar';
import React,{useState, createContext} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SectionModule from './screens/SectionModule.js';
import Home from './screens/Home.js';
import BookedMarked from './screens/BookedMarked.js';
import SubHome from './screens/SubHome.js';
import ClauseScreen from './screens/ClauseScreen.js';
import ClauseContext from './components/ClauseContext.js';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const [savedClause, addClause] = useState([]);


  return (
    <ClauseContext.Provider value={[savedClause, addClause]}>
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="sub"
        component={SubHome}
        options={({ route }) => ({ title: route.params.moduleName })}
      />
      <MainStack.Screen
        name="sub2"
        component={SubHome}
        options={({ route }) => ({ title: route.params.moduleName })}
      />
      <MainStack.Screen
        name="sub3"
        component={ClauseScreen}
        options={({ route }) => ({ title: route.params.moduleName })}
      />
      <MainStack.Screen
        name="test"
        component={SectionModule}
        options={({ route }) => ({ title: route.params.moduleName })}
      />
    </MainStack.Navigator>
    </ClauseContext.Provider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="BookedMarked" component={BookedMarked} />
      </RootStack.Navigator>
    </NavigationContainer>
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
