import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../features/home/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {/* Tela principal */}
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
