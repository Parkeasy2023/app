import React from "react"
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { LoginTypes } from "../../navigations/login.navigation"
import { FontAwesome5, Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';

export function HomeVoucherScreen({navigation}:LoginTypes){
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
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Data*"
                        placeholderTextColor={colors.primary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Horário de início*"
                        placeholderTextColor={colors.primary}

                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Duração*"
                        placeholderTextColor={colors.primary}
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Valor*"
                        placeholderTextColor={colors.primary}
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Quantidade*"
                        placeholderTextColor={colors.primary}
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Salvar" 
                    type="primary" 
                    onPressI={() => {navigation.navigate('Tab') }} 
                />
                <ComponentButtonInterface 
                    title="Voltar" 
                    type="secondary" 
                    onPressI={() => { navigation.navigate('Tab') }}
                />
                
            </KeyboardAvoidingView>
        </View>
    )
}