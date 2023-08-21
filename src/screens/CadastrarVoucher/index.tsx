import React from "react"
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabETypes } from "../../navigations/tabEstab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { FontAwesome5, Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
import { LoginTypes } from "../../navigations/login.navigation"

export function HomeVoucherScreen({navigation}:TabETypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
}
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Voucher </Text>
                
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Código*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Data*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Horário de início*"
                        placeholderTextColor={colors.secondary}

                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Duração*"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Valor*"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Quantidade*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Salvar" 
                    type="primary" 
                    onPressI={() => {navigation.navigate('Home') }} 
                />
            </KeyboardAvoidingView>
        </View>
    )
}