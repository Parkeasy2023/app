import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { IVoucherProps } from "../../screens/Listar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export function ListItem({ codigo, data, hri, duracao,valor, metodo, qtd onPress }: IVoucherProps) {
    function handleConfirm() {
        Alert.alert('Remover', 'Deseja Remover o Voucher selecionado?',[
            {
                text: 'Não',
            },
            {
                text: 'Sim',
                onPress: onPress
            }
        ])
    }
    return (
    <View style={styles.listItem}>
      <View>
        <Text style={styles.textItem}>{codigo}</Text>
        <Text style={styles.textItem}>{data}</Text>
        <Text style={styles.textItem}>{hri}</Text>
        <Text style={styles.textItem}>{duracao}</Text>
        <Text style={styles.textItem}>{valor}</Text>
        <Text style={styles.textItem}>{metodo}</Text>
        <Text style={styles.textItem}>{qtd}</Text>
      </View>
      <TouchableOpacity style={styles.trash} onPress={() => handleConfirm()}>
        <Ionicons name="ios-trash-outline" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
