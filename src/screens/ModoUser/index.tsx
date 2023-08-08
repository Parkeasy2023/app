import React from 'react';
import { View, Image, Text } from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface} from '../../components';
import { LoginTypes } from "../../navigations/login.navigation"
//PÁGINA DE MODO DE USUÁRIO

export function ModoUser({navigation}: LoginTypes) {
    const carro = require("../../assets/logo.png")
    return(
        <View style={styles.container}>
            <Image source={carro} style={styles.logo}/>
                <ComponentButtonInterface 
                    title="Motorista" 
                    type="primary" 
                    onPressI={() => navigation.navigate('Cadastrar')} //Ir para a página de LoginMotorista
                />
                <ComponentButtonInterface 
                    title="Estacionamento" 
                    type="primary" 
                    onPressI={() => { navigation.navigate('Cadastrar') }} //Ir para a página de LoginEstacionamento
                    />
                 <Text style={styles.title}>Selecione seu modo de uso!</Text>
        </View>
    )
}