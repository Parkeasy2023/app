import React from 'react';
import {  View, KeyboardAvoidingView, Text, TextInput} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';

export function Veiculo({navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>CADASTRO VEICULO</Text>
                <View style={styles.formRow}>
                    <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome Completo"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.primary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="phone" style={styles.icon} />
                    <TextInput
                        placeholder="Telefone"
                        placeholderTextColor={colors.primary}

                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <AntDesign name="solution1" style={styles.icon} />
                    <TextInput
                        placeholder="cpf"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome name="intersex" style={styles.icon} />
                    <TextInput
                        placeholder="Sexo"
                        placeholderTextColor={colors.primary}

                        autoCapitalize="none"
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
                    type="primary" 
                    onPressI={() => { navigation.navigate('Tab') }}
                />
                
            </KeyboardAvoidingView>
        </View>
    )
}
