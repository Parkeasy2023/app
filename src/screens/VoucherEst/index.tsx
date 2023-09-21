import React from "react"
import { View, Text, ScrollView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';

export function VoucherEScreen({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View>
            <ScrollView>
            <Text style={styles.title}>Voucher Reservados</Text>           
            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                            <Text style={styles.link}>ID: 23589 </Text>
                            <Text style={styles.text}> Motorista: João da Silva </Text>
                            <Text style={styles.text}> Placa: 1A2B3C </Text>
                            <Text style={styles.text}> Horário: 10:28 </Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>


            </ScrollView>
        </View>
    )
}
