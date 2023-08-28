import React from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput } from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from "../../navigations/login.navigation"

export function Login({navigation}: LoginTypes) {
    const carro = require("../../assets/logo.png")
    const logo = require("../../assets/logoescrito.png")
    return(
        <View style={styles.container}>
            <View style={styles.formRow2} >
                <Image source={carro} />
            </View>
            <View style={styles.formRow2} >
                <Image source={logo} />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Usuário"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.primary}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Entrar" 
                    type="primary" 
                    onPressI={() => navigation.navigate('Tab')} //arrumar, após a implementação do bnc de dds, para redirecionar de acordo com o CPF( página do motorista) ou CNPJ(página do estacionamento)
                />
                <ComponentButtonInterface 
                    title="Cadastre-se" 
                    type="fourth" 
                    onPressI={() => { navigation.navigate('ModoUser') }} //navigate: Ir para a página de escolher o tipo de usuário
                    />
            </KeyboardAvoidingView>
        </View>
    )
}
