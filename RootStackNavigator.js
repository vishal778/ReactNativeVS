import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import Home from './src/Home/home';
import lifeScreen from './src/Home/lifeScreen';

const RootStack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
        backgroundColor: '#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
};

const Root = () => {

    return (
        <RootStack.Navigator screenOptions={screenOptionStyle}>
          <RootStack.Screen name = "Home" component = {Home}/>
          <RootStack.Screen name= "lifeScreen" component = {lifeScreen} />
        </RootStack.Navigator>
    )
}

export default Root;