import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenPerfil, ScreenVeiculo } from ".."
import { LoginTypes } from "../../navigations/login.navigation"
/* ou ../Perfil/styles*/

export function Perfil({navigation}:LoginTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Bem vindo á página do seu perfil!</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Veiculo')}>
                <Text>Adicionar Veículo</Text>
            </TouchableOpacity>

            <ComponentButtonInterface 
                title="Voltar" 
                type="fourth" 
                onPressI= {handleVoltar}         
            />
        </View>
    )
}
/*
<TouchableOpacity onPress={ScreenPerfil}>
<Text>Adicionar Veículo<Text/>
</TouchableOpacity>
*/