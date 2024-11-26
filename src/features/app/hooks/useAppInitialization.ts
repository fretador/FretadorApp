import { useState, useCallback } from 'react';

export const useAppInitialization = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeApp = useCallback(async () => {
    // Simula inicializações (ex.: autenticação, carregamento de configurações)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay fake
    setIsInitialized(true);
  }, []);

  return { isInitialized, initializeApp };
};
