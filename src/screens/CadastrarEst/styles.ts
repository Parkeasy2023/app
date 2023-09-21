import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    title: {
      fontSize: 30,
      marginTop: 40,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.primary
    },
    subtitle: {
        marginTop: 9,
        fontSize: 15,
        textAlign: "center",
        color: colors.secondary
    },
    formRow: {
        paddingTop: 2,
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
    scrollView: {
        alignItems: "center",
    }

})
