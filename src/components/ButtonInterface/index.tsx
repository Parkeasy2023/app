import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps{
    onPressI: () => void
    title: string
    type: 'primary' | 'secondary' | 'third' | 'thirdLight' | 'fourth'
}
export function ButtonInterface({ onPressI, title, type, ...rest }: IBInterface) {
    return (
        <TouchableOpacity style={
            type == "primary" ? styles.buttonPrimary:
                type == "secondary" ? styles.buttonSecondary:
                    type == "third" ? styles.buttonThird:
                        type == "fourth" ? styles.buttonFourth: //Botão apenas borda
                        styles.buttonThirdLight
        } onPress={onPressI} 
            {...rest} 
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}