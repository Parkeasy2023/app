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
    panel: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 2,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: colors.primary,
        color: colors.secondary
    },
    select:{
        width: "90%",
        color: colors.secondary
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
    }

})
