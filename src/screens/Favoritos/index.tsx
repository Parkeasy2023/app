import React from "react"
import { View, Text, ScrollView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
/* ou ../Perfil/styles*/

export function Favoritos({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View>
            <ScrollView>
            <Text style={styles.title}>FAVORITOS</Text>
            <Text style={styles.subtitle}>Acesse seus estacionamentos favoritos</Text>
            
            <View style={styles.formRow}>
                <Feather name="heart" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 1</Text>
                            <Text style={styles.text}> Endereço: Rua das Rosas - 123, Jardim das Flores</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.formRow}>
                <Feather name="heart" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 2</Text>
                            <Text style={styles.text}> Endereço: Avenida do Café - 456, Centro</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.formRow}>
                <Feather name="heart" size={30} color={colors.secondary} />
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.link}>Estacionamento 3</Text>
                            <Text style={styles.text}> Endereço: Praça da Matriz - 789, São Benedito</Text>
                                <Text style={styles.text2}> detalhes...  </Text>
                    </TouchableOpacity>
            </View>

            </ScrollView>
        </View>
    )
}

