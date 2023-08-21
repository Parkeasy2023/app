import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.primary,
        borderRadius: 18,
        margin: 10,
        paddingHorizontal: 8
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        borderRadius: 18,
        margin: 10
    },
    buttonThird: {
        backgroundColor: colors.third,
        borderRadius: 18,
        margin: 10
    },
    buttonThirdLight: {
        backgroundColor: colors.primary,
        borderRadius: 18,
        margin: 10
    },
    buttonFourth: {
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 18,
        margin: 10
    },
    text2: {
        color: colors.primary,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
    }
})