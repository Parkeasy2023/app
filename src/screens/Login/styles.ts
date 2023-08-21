import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.primary
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: colors.primary
    },
    icon: {
        fontSize: 28,
        color: colors.primary,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
    formRow2: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5
    },
})
