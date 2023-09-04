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

export function HistVoucher({navigation}:TabTypes){
    return(
        <View>
            <ScrollView>
            <Text style={styles.title}>Vouchers Oferecidos</Text>
            <Text style={styles.subtitle}>Acesse aqui os vauchr oferecidos hoje!</Text>
            
            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 1</Text>
                            <Text style={styles.text}> voucher: 23589</Text>
                            <Text style={styles.text}> horário: 10:28</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 2</Text>
                            <Text style={styles.text}> voucher: 23589</Text>
                            <Text style={styles.text}> horário: 10:28</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 3</Text>
                            <Text style={styles.text}> voucher: 23589</Text>
                            <Text style={styles.text}> horário: 10:28</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.formRow}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 4</Text>
                            <Text style={styles.text}> voucher: 23589</Text>
                            <Text style={styles.text}> horário: 10:28</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            </ScrollView>
        </View>
    )
}
