import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, findNodeHandle, Alert} from "react-native";
import { styles } from "./styles";
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Picker } from "@react-native-picker/picker";
import { MaskedTextInput } from "react-native-mask-text";
import { ComponentButtonInterface } from '../../components';
import { ComponentLoading } from '../../components'; //Para o lottie

import { LoginTypes } from '../../navigations/login.navigation';
import { IRegister } from '../../services/data/User';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';

export interface IErrorApi { //tipo de erro que a API pode retornar
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function CadastrarMot({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedGender, setSelectedGender] = useState<IRegister>();
    
    async function handleRegister() {
        try {
            setIsLoading(true)
            if(data?.name && data.email && data.password) {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} Cadastro realizado com sucesso!`)
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos!")
            }
        } catch (error) {
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if(errData){
                for(const iterator of errData.errors) {
                    message = `${message} ${iterator.message} \n`
                }
            }
            Alert.alert(message)
        } finally {
            setIsLoading(false)
        }
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item})
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return (
        <>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>CADASTRO DE MOTORISTA</Text>
                <Text style={styles.subtitle}>*indica os campos obrigatórios</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome Completo*"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i) => handleChange({ name: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <AntDesign name="calendar" style={styles.icon} />
                    <MaskedTextInput
                    mask="99/99/9999"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Data de Nascimento*"
                        placeholderTextColor={colors.primary}
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email*"
                        placeholderTextColor={colors.primary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i) => handleChange({ email: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="phone" style={styles.icon} />
                    <MaskedTextInput
                    mask="(99)99999-9999"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Telefone*"
                        placeholderTextColor={colors.primary}
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <AntDesign name="solution1" style={styles.icon} />
                    <MaskedTextInput
                    mask="999.999.999-99"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                    placeholder="CPF*"
                    placeholderTextColor={colors.primary}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={styles.input}
                    />
                </View>
                <View style={styles.panel}>
                        <FontAwesome name="intersex" style={styles.icon} />
                        <Picker
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedGender(itemValue)
                            }
                            style={styles.select}>
                            <Picker.Item label="Feminino" value="feminino" />
                            <Picker.Item label="Masculino" value="masculino" />
                            <Picker.Item label="Prefiro não informar" value="indefinido" />
                        </Picker>
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
                    title="Salvar"
                    type="primary"
                    onPressI={handleRegister} //Tab: Ir para a página de HomeVoucher
                />
                <ComponentButtonInterface
                    title="Voltar"
                    type="fourth"
                    onPressI={() => { navigation.navigate('Login') }}
                />
            </KeyboardAvoidingView>
        </View>
    ) }
    </>
    )
}

