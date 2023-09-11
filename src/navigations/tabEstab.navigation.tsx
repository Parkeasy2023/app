import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenHomeVoucher, ScreenEVoucher, ScreenRecVoucher, ScreenPerfilEst } from "../screens";
import { colors } from "../styles/colors";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

type TabEParamList = {
  Home: undefined
  Voucher: undefined
  PerfilEst: undefined
  RecVoucher: undefined
  /*Perfil: undefined*/
}
type TabEScreenNavigationProp = BottomTabNavigationProp<TabEParamList, 'Home'>
export type TabETypes = {
  navigation: TabEScreenNavigationProp
}

export function TabENavigation() {
  const TabE = createBottomTabNavigator();
  return (
    <TabE.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary, //background da tab
        tabBarInactiveBackgroundColor: colors.thirdLight,
        tabBarActiveTintColor: colors.white, //cor da label da tab selecionada
        tabBarInactiveTintColor: colors.white, //cor da label da tab não selecionada
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white //titulo de cada página
      }}
    >
      <TabE.Screen name="Home" component={ScreenEVoucher} //location
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={colors.white} size={24} />
          )
        }}
      />
      <TabE.Screen name="Add Voucher" component={ScreenHomeVoucher} //location
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="add-location-alt" color={colors.white} size={24} />
          )
        }}
      />
      <TabE.Screen name="Rec Voucher" component={ScreenRecVoucher} //location
        options={{
          tabBarIcon: () => (
            <Ionicons name="checkmark-done-sharp" size={24} color={colors.white} />
          )
        }}
      />
      <TabE.Screen name="Perfil" component={ScreenPerfilEst} //location
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          )
        }}
      />
    </TabE.Navigator>
  );
}