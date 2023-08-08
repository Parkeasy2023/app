import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    ball: {
        width: 20,
        height: 20,
        backgroundColor: colors.secondary,
        borderRadius: 15
    },
    click: {
        width: 20,
        height: 20,
        backgroundColor: colors.black,
        borderRadius: 15
    }
})