import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenModo, ScreenCadastrarMot, ScreenCadastrarEst, } from "../screens"
import { TabNavigation } from './tab.navigation';

type LoginStackParamList = {
  Login: undefined
  CadastrarEst: undefined
  CadastrarMot: undefined
  Tab: undefined
  ModoUser: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="CadastrarEst" component={ScreenCadastrarEst} />
      <Stack.Screen name="CadastrarMot" component={ScreenCadastrarMot} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="ModoUser" component={ScreenModo}/>
    </Stack.Navigator>
  );
}