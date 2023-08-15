import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../../styles/colors"

export function VoucherScreen({navigation}:TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
            <MaterialIcons name="add-location-alt" color={colors.primary} size={24}/>
            <Text>Bem vindo a página de favoritos!</Text>
            <ComponentButtonInterface 
                title="Voltar" 
                type="fourth" 
                onPressI= {handleVoltar}         
            />
        </View>
    )
}
