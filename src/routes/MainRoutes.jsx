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
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { fontSize: 15 },
          tabBarStyle: {
            backgroundColor: '#fff',
            padding: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Movies') {
              iconName = 'videocam';
            } else if (route.name === 'LiveEvents') {
              iconName = 'cash';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Icon type='ionicon' name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Movies" component={MovieStack} />
        <Tab.Screen name="LiveEvents" component={LiveEventsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;