import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import Home from '../screens/Home';
import About from '../screens/About';
import MoviePage from '../screens/MoviePage';
import LiveEvents from '../screens/LIveEvents';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoviePage" component={MoviePage} />
    </Stack.Navigator>
  );
}

function LiveEventsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LiveEvents" component={LiveEvents} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { fontSize: 14 }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon type='ionicon' name='home-outline' color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Movies" 
          component={MovieStack} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon type='ionicon' name='planet-outline' color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="LiveEvents" 
          component={LiveEventsStack} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon type='ionicon' name='link-outline' color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack} 
          options={{ 
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
