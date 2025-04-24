import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import TipsScreen from '../screens/TipsScreen';
import CityFormScreen from '../screens/CityFormScreen';
import AboutScreen from '../screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#166534',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#f0fdf4',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Clima':
              iconName = 'cloudy';
              break;
            case 'Dicas':
              iconName = 'leaf';
              break;
            case 'Cadastro':
              iconName = 'location';
              break;
            case 'Sobre':
              iconName = 'information-circle';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Clima" component={WeatherScreen} />
      <Tab.Screen name="Dicas" component={TipsScreen} />
      <Tab.Screen name="Cadastro" component={CityFormScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
    </Tab.Navigator>
  );
}
