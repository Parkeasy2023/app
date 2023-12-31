import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.primary
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 5
    },
    icon: {
        fontSize: 28,
        color: colors.secondary,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
    logo: {
        width: 114,
        height: 117
    }

})
