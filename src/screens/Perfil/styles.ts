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
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 5
    },
    link: {
        color: colors.secondary
    }
})