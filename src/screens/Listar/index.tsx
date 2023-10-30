import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
//import { CompListItem, CompLoading } from "../../components";
import { apiVoucher } from "../../services/data";
import { styles } from "./styles";
import { ButtonInterface } from "../../components/ButtonInterface";
import { TabTypes } from "../../navigations/tab.navigation";
import { AxiosError } from "axios";

export interface IVoucher {
  codigo?: number
  data?: number
  hri?: number
  duracao?: number
  valor?: number
  metodo?: string
  qtd?: number
  
}

export interface IVoucherProps {
  codigo?: number
  data?: number
  hri?: number
  duracao?: number
  valor?: number
  metodo?: string
  qtd?: number
  onPress?: () => void
}

export function Listar({navigation}:TabTypes) {
  const [data, setData] = useState<IVoucher[]>()
  const [loading, setLoading] = useState(true)
    async function fetchData() {
      const response = await apiVoucher.index()
      setData(response.data)
      setLoading(false)
    }
    useEffect(() => {
      navigation.addListener("focus", () => fetchData())
      fetchData()
    }, [])
  async function handleRemove(id: number) {
    try {
      setLoading(true)
      await apiVoucher.delete(id)
      Alert.alert("Voucher Removido!")
      fetchData()
    } catch (error) {
      const err = error as AxiosError
      Alert.alert(err.response?.data as string)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
    {
      loading ? (
        <CompLoading />
      ) : (
        <View style ={styles.container}>
      <Text style={styles.title}> Pacientes </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => 
            <CompListItem key={item.id}
                paciente={item.paciente} idade={item.idade} diagnostico={item.diagnostico} 
                onPress={() => handleRemove(Number(item.id))}       
            />
        }
        keyExtractor={(i) => String(i.id)}
      />
    </View>
      )
    }
    </>
    
  );
}
