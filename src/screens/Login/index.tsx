import React, { useEffect, useState } from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { AntDesign,MaterialIcons  } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';
import { MaskedTextInput } from "react-native-mask-text";
import { LoginTypes } from "../../navigations/login.navigation"
import { AxiosError } from 'axios';
import { IAuthenticate } from '../../services/data/User';

export interface IErrorApi{
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Login({navigation}: LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);

    const carro = require("../../assets/logo.png");
    const logo = require("../../assets/logoescrito.png");

    async function handleSignIn() {
        try{
            setIsLoading(true);
            if (data?.document && data.password) {
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos!");
                setIsLoading(false);
            }
        } catch(error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false);
        }
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item})
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    },[])

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
                    onChangeText={(i) => handleChange({ document: i })}
                    placeholder="CPF*"
                    placeholderTextColor={colors.primary}
                    keyboardType="numeric"
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
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Entrar" 
                    type="primary" 
                    onPressI={handleSignIn} //arrumar, após a implementação do bnc de dds, para redirecionar de acordo com o CPF( página do motorista) ou CNPJ(página do estacionamento)
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

function useAuth(): { signIn: any; } {
    throw new Error('Function not implemented.');
}
