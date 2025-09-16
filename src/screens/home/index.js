import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Carlist } from "../carList";
import { Feather } from "@expo/vector-icons";
import { useCars } from "../../contexts/carsContext";

import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const { cars } = useCars();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{padding: 30}}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem vindo, usuário</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsLabel}>Veículos</Text>
          <View style={styles.detailsItem}>
            <Text>
              <Text style={styles.totalNumber}>
                {cars.filter((car) => car.status === "disponível").length}
              </Text>
              / {cars?.length} disponíveis
            </Text>
          </View>
          <View>
            <Text>
              <Text style={styles.totalNumber}>
                {cars.filter((car) => car.status === "em uso").length}
              </Text>
              / {cars?.length} em uso
            </Text>
          </View>
        </View>
        <Text style={[styles.text,{marginBottom: 30}]}>Veículos disponíveis</Text>
        <Carlist status={"disponível"} />
        <Text style={[styles.text,{marginBottom: 30}]}>Restante dos veículos</Text>

        <Carlist status={"disponível"} exceptionStatus={true}/>
        {/* <TouchableOpacity style={styles.newExitButton}>
          <Feather name="plus" size={40} color={"white"}></Feather>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}
