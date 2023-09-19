import React from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput } from "react-native";
import {styles} from "./styles";
import { AntDesign,MaterialIcons  } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { MaskedTextInput } from "react-native-mask-text";
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
                <AntDesign name="solution1" style={styles.icon} />
                    <MaskedTextInput
                    mask="999.999.999-99" 
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="CPF/CNPJ"
                        placeholderTextColor={colors.primary}
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="vpn-key" style={styles.icon} />
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
