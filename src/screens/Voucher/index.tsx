import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
/* ou ../Perfil/styles*/

export function VoucherScreen({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View>
            <Text style={styles.title}>VOUCHERS</Text>
            <Text style={styles.subtitle}>Acesse seus vouchers adquiridos</Text>
            
            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 1</Text>
                            <Text style={styles.text}> voucher: 23589</Text>
                            <Text style={styles.text}> horário: 10:28</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>
            <ComponentButtonInterface 
                title="Voltar" 
                type="primary" 
                onPressI= {handleVoltar}         
            />
        </View>
    )
}
