import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';

export function CadastrarEst({navigation}: LoginTypes) {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>CADASTRO ESTACIONAMENTO</Text>
                <View style={styles.formRow}>
                    <FontAwesome5 name="parking" style={styles.icon} />
                    <TextInput
                        placeholder="Nome fantasia"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="work" style={styles.icon} />
                    <TextInput
                        placeholder="razão social"
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
                    <AntDesign name="question" style={styles.icon} />
                    <TextInput
                        placeholder="CNPJ"
                        placeholderTextColor={colors.primary}
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
                    <Entypo name="location" style={styles.icon} />
                    <TextInput
                        placeholder="CEP"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Cidade"
                        placeholderTextColor={colors.primary}
                        secureTextEntry={true}
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
                    type="secondary" 
                    onPressI={() => { navigation.navigate('Login') }}
                />
                <ComponentButtonInterface 
                    title="Já possuí uma conta? Faça login" 
                    type="secondary" 
                    onPressI={() => { navigation.navigate('Login') }} //navigate: Ir para a página de escolher o tipo de usuário
                    />
                
            </KeyboardAvoidingView>
        </View>
    )
}
