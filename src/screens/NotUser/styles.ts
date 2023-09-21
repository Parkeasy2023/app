import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", /*vertical e horizontal*/
        justifyContent: "center"
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 5,
        fontSize: 20,
        marginTop: 25
    },
    link: {
        color: colors.primary,
        marginLeft: 30,
        fontSize: 20,
    },
    text : {
        color: colors.secondary,
        marginLeft: 30,
        fontSize: 14
    },
    text2 : {
        color: colors.primary,
        marginLeft: 30,
        fontSize: 12
    },
    title: {
        marginTop: 80,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.primary
      },
      subtitle: {
        marginTop: 5,
        fontSize: 15,
        textAlign: "center",
        color: colors.black
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