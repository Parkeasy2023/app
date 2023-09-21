import React, { useState } from "react"
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabETypes } from "../../navigations/tabEstab.navigation"
import { MaskedTextInput } from "react-native-mask-text";
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { FontAwesome5, Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { colors } from '../../styles/colors';
import { LoginTypes } from "../../navigations/login.navigation"
import { Picker } from "@react-native-picker/picker";
import { IRegister } from "../../services/data/User";

export function HomeVoucherScreen({navigation}:TabETypes){
    const [selectedGender, setSelectedPagamento] = useState<IRegister>();
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Voucher</Text>
                
                <View style={styles.formRow}>
                <MaskedTextInput
                    mask="99-9999"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Código*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <MaskedTextInput
                    mask="99/99/9999"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Data*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <MaskedTextInput
                    mask="99:99"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Horário de início*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <MaskedTextInput
                    mask="99:99"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Duração em horas*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <MaskedTextInput
                    mask="R$99,99"
                    onChangeText={(text, rawText) => {
                      console.log(text);
                      console.log(rawText);
                    }}
                        placeholder="Valor*"
                        placeholderTextColor={colors.secondary}
                        autoCapitalize= "none"
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
                <View style={styles.panel}>
                        <Picker
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedPagamento(itemValue)
                            }
                            placeholder="Pagamento*"
                            style={styles.select}>
                                <Picker.Item label="Método de pagamento*" value="null" />
                            <Picker.Item label="Cŕedito" value="Cŕedito" />
                            <Picker.Item label="Débido" value="Débido" />
                            <Picker.Item label="Pix" value="Pix" />
                            <Picker.Item label="Dinheiro" value="Dinheiro" />
                        </Picker>
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Quantidade*"
                        placeholderTextColor={colors.secondary}
                        keyboardType="numeric"
                        autoCapitalize= "none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface 
                    title="Salvar" 
                    type="primary" 
                    onPressI={() => {navigation.navigate('Home') }} 
                />
            </KeyboardAvoidingView>
        </View>
    )
}