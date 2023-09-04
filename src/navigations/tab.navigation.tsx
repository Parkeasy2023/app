import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenLocation, ScreenFavoritos, ScreenVoucher } from "../screens";
import { colors } from "../styles/colors";
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

type TabParamList = {
  Perfil: undefined
  Localização: undefined
  Veiculo: undefined
  EditarUser: undefined
  HistVoucher: undefined
  //define as telas que aparecerão no tab
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
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
      
      <Tab.Screen name="Home" component={ScreenLocation} //location
        options={{
          tabBarIcon: () => (
            <Entypo name="location" color={colors.white} size={24}/>
          )
        }}
      />
      <Tab.Screen name="Favoritos" component={ScreenFavoritos}
        options={{
          tabBarIcon: () => (
            <Entypo name="heart" color={colors.white} size={24}/>
          )
        }}
      />
      <Tab.Screen name="Voucher" component={ScreenVoucher} //CRIAR A SCREENVoucher
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="add-location-alt" color={colors.white} size={24}/>
          )
        }}
      />
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24}/>
          ),
          /*tabBarShowLabel: false -> tira o texto do ícone na tab*/
        }}
      />
    </Tab.Navigator>
  );
}