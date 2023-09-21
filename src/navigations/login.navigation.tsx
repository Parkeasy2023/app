import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenModo, ScreenCadastrarMot, ScreenCadastrarEst, ScreenVeiculo, ScreenEditarUser, ScreenHistVoucher, ScreenNotUser, ScreenAddVoucher, ScreenNotEst, ScreenRecVoucher, ScreenAddVoucher, } from "../screens"
import { ScreenHomeVoucher } from "../screens"
import { TabNavigation } from './tab.navigation';
import { TabENavigation } from './tabEstab.navigation';

type LoginStackParamList = {
  Login: undefined
  CadastrarEst: undefined
  CadastrarMot: undefined
  Tab: undefined
  TabE: undefined
  ModoUser: undefined
  Veiculo: undefined
  HomeVoucher: undefined
  EditarUser: undefined
  HistVoucher: undefined
  NotUser: undefined
  NotEst: undefined
  RecVoucher: undefined
  AddVoucher: undefined
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
      <Stack.Screen name="TabE" component={TabENavigation} />
      <Stack.Screen name="ModoUser" component={ScreenModo}/>
      <Stack.Screen name="Veiculo" component={ScreenVeiculo}/>
      <Stack.Screen name="HomeVoucher" component={ScreenHomeVoucher}/>
      <Stack.Screen name="EditarUser" component={ScreenEditarUser}/>
      <Stack.Screen name="HistVoucher" component={ScreenHistVoucher}/>
      <Stack.Screen name="NotUser" component={ScreenNotUser}/>
      <Stack.Screen name="NotEst" component={ScreenNotEst}/>
      <Stack.Screen name="RecVoucher" component={ScreenRecVoucher}/>
      <Stack.Screen name="AddVoucher" component={ScreenAddVoucher}/>
    </Stack.Navigator>
  );
}