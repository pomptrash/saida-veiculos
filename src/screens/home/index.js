import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Carlist } from "../carList";
import { useCars } from "../../contexts/carsContext";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const { cars } = useCars();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem vindo, usuário</Text>
        </View>
        <View style={styles.detailsOutterBorder}>
          <View style={styles.details}>
            <Text style={styles.detailsLabel}>Veículos</Text>
            <View style={styles.detailsItem}>
              <Text>
                <Text style={styles.totalAvailable}>
                  {cars.filter((car) => car.status === "disponível").length}
                </Text>
                / {cars?.length} disponíveis
              </Text>
            </View>
            <View>
              <Text>
                <Text style={styles.totalInUse}>
                  {cars.filter((car) => car.status === "em uso").length}
                </Text>
                / {cars?.length} em uso
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, { marginBottom: 30 }]}>
          Veículos disponíveis
        </Text>
        <Carlist status={"disponível"} />
        <Text style={[styles.text, { marginBottom: 30 }]}>
          veículos restantes
        </Text>

        <Carlist status={"disponível"} exceptionStatus={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
