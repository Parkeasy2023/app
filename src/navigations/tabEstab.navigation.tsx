import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenHomeVoucher, ScreenEVoucher } from "../screens";
import { colors } from "../styles/colors";
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

type TabEParamList = {
  Home: undefined
  Voucher: undefined
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
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white
      }}
    >
      <TabE.Screen name="Home" component={ScreenEVoucher} //location
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={colors.white} size={24} />
          )
        }}
      />
      <TabE.Screen name="Voucher" component={ScreenHomeVoucher} //location
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="add-location-alt" color={colors.white} size={24}/>
          )
        }}
      />
    </TabE.Navigator>
  );
}