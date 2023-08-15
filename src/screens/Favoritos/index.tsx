import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { Entypo } from "@expo/vector-icons"
import { colors } from "../../styles/colors"
/* ou ../Favoritos/styles*/

export function Favoritos({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
            <Entypo name="heart" color={colors.primary} size={24}/>
            <Text>Bem vindo a página de favoritos!</Text>
            <ComponentButtonInterface 
                title="Voltar" 
                type="fourth" 
                onPressI= {handleVoltar}         
            />
        </View>
    )
}
