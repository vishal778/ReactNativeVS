import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import {Provider} from 'react-redux';
import store from './store.js';

const App = () => {
 
  return (
    <Provider store={store}>
   <NavigationContainer>
      <RootStackNavigator />
   </NavigationContainer>
   </Provider>
  );
};

export default App;