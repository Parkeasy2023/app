import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
/* ou ../Perfil/styles*/

export function Perfil({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Bem vindo á página do seu perfil!</Text>
            <ComponentButtonInterface 
                title="Voltar" 
                type="fourth" 
                onPressI= {handleVoltar}         
            />
        </View>
    )
}
