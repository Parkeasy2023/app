import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Picker } from "@react-native-picker/picker";
import { IRegister } from "../../services/data/User"
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';

export function CadastrarMot({ navigation }: LoginTypes) {
    const [selectedGender, setSelectedGender] = useState<IRegister>();
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>CADASTRO DE MOTORISTA</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome Completo*"
                        placeholderTextColor={colors.primary}
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
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="phone" style={styles.icon} />
                    <TextInput
                        placeholder="Telefone*"
                        placeholderTextColor={colors.primary}
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <AntDesign name="solution1" style={styles.icon} />
                    <TextInput
                        placeholder="CPF*"
                        keyboardType='number-pad'
                        placeholderTextColor={colors.primary}
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
                        style={styles.formRow}>
                        <Picker.Item label="Feminino" value="feminino" />
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Prefiro não informar" value="indefinido" />
                    </Picker> 
                </View> 

                <ComponentButtonInterface
                    title="Salvar"
                    type="primary"
                    onPressI={() => { navigation.navigate('Tab') }} //Tab: Ir para a página de HomeVoucher
                />
                <ComponentButtonInterface
                    title="Voltar"
                    type="fourth"
                    onPressI={() => { navigation.navigate('Login') }}
                />
            </KeyboardAvoidingView>
        </View>
    )
}
