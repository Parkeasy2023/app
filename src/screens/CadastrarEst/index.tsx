import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput, ScrollView
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
                <ScrollView>
                <Text style={styles.title}>CADASTRO DE ESTACIONAMENTO</Text>
                <View style={styles.formRow}>
                    <FontAwesome5 name="parking" style={styles.icon} />
                    <TextInput
                        placeholder="Nome fantasia"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="work" style={styles.icon} />
                    <TextInput
                        placeholder="Razão Social"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <AntDesign name="solution1" style={styles.icon} />
                    <TextInput
                        placeholder="CNPJ"
                        placeholderTextColor={colors.secondary}
                        keyboardType='numeric'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="phone" style={styles.icon} />
                    <TextInput
                        placeholder="Telefone"
                        placeholderTextColor={colors.secondary}
                        keyboardType='phone-pad'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Entypo name="location" style={styles.icon} />
                    <TextInput
                        placeholder="CEP"
                        placeholderTextColor={colors.secondary}
                        keyboardType='numeric'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Cidade"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Bairro"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Rua"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Logradouro"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Salvar" 
                    type="primary" 
                    onPressI={() => {navigation.navigate('TabE') }} 
                />
                <ComponentButtonInterface 
                    title="Voltar" 
                    type="fourth" 
                    onPressI={() => { navigation.navigate('Login') }}
                />
                </ScrollView>
                
            </KeyboardAvoidingView>
        </View>
    )
}
