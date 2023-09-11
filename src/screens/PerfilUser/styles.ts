import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", /*vertical e horizontal*/
        justifyContent: "center"
    },
    formRow: {
        margin: 20,
        flexDirection: "row",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 5,
        fontSize: 20,
        marginTop: 30
    },
    link: {
        color: colors.secondary,
        marginLeft: 40,
        fontSize: 20, 
    },
    text : {
        color: colors.secondary,
        marginLeft: 45,
        fontSize: 14
    },
    text2 : {
        color: colors.primary,
        marginLeft: 100,
        fontSize: 12
    },
    title: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.primary
      },
      subtitle: {
        marginTop: 9,
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
    },
    button:
    {
        paddingBottom: 20,
    },
    
})