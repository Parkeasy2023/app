import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { styles } from "./styles";
import { MaterialIcons, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { Picker } from "@react-native-picker/picker";
import { IRegister } from "../../services/data/User"
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CadastrarMot({ navigation }: LoginTypes) {
    const [selectedGender, setSelectedGender] = useState<IRegister>();
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>CADASTRO DE MOTORISTA</Text>
                <Text style={styles.subtitle}>* indica os campos obrigatórios</Text>
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
                    />
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
