import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
/* ou ../Perfil/styles*/

export function AddVoucher({navigation}:LoginTypes){
    return(
        <View>
            <Text style={styles.title}>Perfil Estacionamento</Text>
            <View style={styles.formRow}>
                    <FontAwesome5 name="user-alt" size={24} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('EditarUser')}>
                        <Text style={styles.link}>Editar Perfil</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <Entypo name="heart" size={24} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Editar Voucher</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <MaterialCommunityIcons name="bell" size={24} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('NotEst')}>
                        <Text style={styles.link}>Notificações</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <Ionicons name="ios-information-circle-sharp" size={24} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Ajuda</Text>
                    </TouchableOpacity>
            </View>
            <ComponentButtonInterface 
                    title="Sair" 
                    type="fourth" 
                    onPressI={() => navigation.navigate('Login')} 
                />
        </View>
    )
}
/*
<TouchableOpacity onPress={ScreenPerfil}>
<Text>Adicionar Veículo<Text/>
</TouchableOpacity>
*/