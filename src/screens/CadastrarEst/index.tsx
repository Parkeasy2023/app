import React from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput, ScrollView
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { MaskedTextInput } from "react-native-mask-text";
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
                        placeholder="Nome do estabelecimento"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="work" style={styles.icon} />
                    <TextInput
                        placeholder="Razão Social"
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
                    <AntDesign name="solution1" style={styles.icon} />
                    <MaskedTextInput
                    mask="99.999.999/9999-99"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="CNPJ*"
                        placeholderTextColor={colors.primary}
                        keyboardType='numeric'
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
                    <Entypo name="location" style={styles.icon} />
                    <MaskedTextInput
                    mask="99999-999"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="CEP"
                        placeholderTextColor={colors.primary}
                        keyboardType='numeric'
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Cidade"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Bairro"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="city" style={styles.icon} />
                    <TextInput
                        placeholder="Logradouro"
                        placeholderTextColor={colors.primary}
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
