import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../features/app/screens/SplashScreen';
import { MainRoutes } from './routes/MainRoutes';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Simula carregamento do app (ex.: inicializações)
    const initializeApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um delay
      setIsAppReady(true);
    };

    initializeApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAppReady ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="Main" component={MainRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
