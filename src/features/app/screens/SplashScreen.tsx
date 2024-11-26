import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAppInitialization } from '../hooks/useAppInitialization';

export const SplashScreen = () => {
  const { isInitialized, initializeApp } = useAppInitialization();

  useEffect(() => {
    initializeApp(); // Inicializa os serviços e configurações do app
  }, [initializeApp]);

  if (!isInitialized) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  // Retorna null enquanto a navegação não carrega ou redireciona
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
