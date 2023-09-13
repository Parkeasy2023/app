import React from "react"
import { View, Text, ScrollView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';

export function NotUser({ navigation }: TabTypes) {
    return (
        <View>
            <ScrollView>
                <Text style={styles.title}>Notificações</Text>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Tem voucherzinho novo hoje!</Text>
                        <Text style={styles.text}> O estacionamento 1 disponibilizou um vaucher</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes... </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Tem voucherzinho novo hoje!</Text>
                        <Text style={styles.text}> O estacionamento 3 disponibilizou um vaucher</Text>
                        <Text style={styles.text}> horário: 15:30</Text>
                        <Text style={styles.text2}> detalhes... </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Voucher reserevado com sucesso!</Text>
                        <Text style={styles.text}> O estacionamento 1 reconheceu seu interesse</Text>
                        <Text style={styles.text}> horário: 11:00</Text>
                        <Text style={styles.text2}> detalhes... </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Voucher reserevado com sucesso!</Text>
                        <Text style={styles.text}> O estacionamento 4 reconheceu seu interesse</Text>
                        <Text style={styles.text}> horário: 08:40</Text>
                        <Text style={styles.text2}> detalhes... </Text>
                    </TouchableOpacity>
                </View>            
                <View>
                    <ComponentButtonInterface
                        title="Voltar"
                        type="fourth"
                        onPressI={() => { navigation.navigate('Perfil') }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
