import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo, ScreenEditarUser } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
/* ou ../Perfil/styles*/

export function Perfil({navigation}:LoginTypes){
    return(
        <View>
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.subtitle}>Bem vindo(a) a seu Perfil (...) !</Text>
            
            <View style={styles.formRow}>
                    <FontAwesome5 name="user-alt" size={24} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('EditarUser')}>
                        <Text style={styles.link}>Editar Perfil</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={colors.primary}/>
                    <TouchableOpacity onPress={() => navigation.navigate('HistVoucher')}>
                        <Text style={styles.link}>Histórico de Vauchers</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <MaterialCommunityIcons name="bell" size={24} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('NotUser')}>
                        <Text style={styles.link}>Notificação</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <FontAwesome5 name="car" size={24} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Adicionar Veículo</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.formRow}>
                    <Ionicons name="ios-information-circle-sharp" size={24} color={colors.primary} />
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