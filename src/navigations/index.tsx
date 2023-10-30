import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation"
import { useAuth } from '../hooks/auth';
import { TabNavigation } from './tab.navigation';
import { TabENavigation } from './tabEstab.navigation';

export function Navigation() {
  const { user } = useAuth()
  console.log(user)
  return (
    <NavigationContainer>
      {!user?.token ? (<LoginNavigation />) :
        user.user.document?.length === 14 ? ( //verifica o tipo de usuário logado de acordo com o tamanho do documento.
          <TabNavigation />
        ) : (
          <TabENavigation />
        )}

    </NavigationContainer>
  );
}