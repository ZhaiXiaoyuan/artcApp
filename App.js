import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//导入
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//引入页面模块
import LoginScreen from './pages/Login/LoginScreen';
import HomeScreen from './pages/Home/HomeScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              tabStyle : {
                backgroundColor: '#ddd',
                paddingBottom: 15,
                borderRightWidth: 1,
                borderRightColor: '#fff'
              },
            }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
