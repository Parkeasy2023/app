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

export function RecVoucher({ navigation }: TabTypes) {
    return (
        <View>
            <ScrollView>
                <Text style={styles.title}> Reconhecer Voucher</Text>
                <Text style={styles.subtitle}>Reconheça a reserva de voucher dos seus clientes!</Text>

                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Luísa Scalioni</Text>
                        <Text style={styles.text}> voucher: 23589</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Luna Castro </Text>
                        <Text style={styles.text}> voucher: 23589</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Vinícius Mantovani </Text>
                        <Text style={styles.text}> voucher: 23589</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Yasmin de Souza </Text>
                        <Text style={styles.text}> voucher: 23589</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formRow}>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color={colors.primary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Eduardo Carvalho</Text>
                        <Text style={styles.text}> voucher: 23589</Text>
                        <Text style={styles.text}> horário: 10:28</Text>
                        <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}