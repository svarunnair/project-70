import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MoviePage from '../screens/MoviePage';
import { Icon } from '@rneui/base';
import LiveEvents from '../screens/LIveEvents';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen 
  name="Home" 
  component={Home} 
  options={{ 
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon type='ionicon' name='home-outline' color={color} size={size} />
    ),
  }} 
/>
        <Tab.Screen 
  name="Movies" 
  component={MoviePage} 
  options={{ 
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon type='ionicon' name='planet-outline' color={color} size={size} />
    ),
  }} 
/>
<Tab.Screen 
  name="Live Events" 
  component={LiveEvents} 
  options={{ 
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon type='ionicon' name='link-outline' color={color} size={size} />
    ),
  }} 
/>
<Tab.Screen 
  name="Profile" 
  component={Profile} 
  options={{ 
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon type='ionicon' name='person-outline' color={color} size={size} />
    ),
  }} 
/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
