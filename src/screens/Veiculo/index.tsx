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
                <Text style={styles.title}>Cadastrar Veiculo </Text>
                
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Modelo"
                        placeholderTextColor={colors.primary}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Marca"
                        placeholderTextColor={colors.primary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Placa"
                        placeholderTextColor={colors.primary}

                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Cor"
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
                    type="secondary" 
                    onPressI={() => { navigation.navigate('Tab') }}
                />
                
            </KeyboardAvoidingView>
        </View>
    )
}
