import { View, Text, ScrollView } from "react-native";
import { Card } from "../../components/card";
import { styles } from "./styles";
import { useCars } from "../../contexts/carsContext";

export function Home() {
  const { cars } = useCars()

  return (
    <ScrollView contentContainerStyle={styles.container} style={{flex:1, marginBottom: 40}} >
      <Text style={styles.title}>Veículos</Text>
      <View style={styles.carList}>
        {cars.map((carro) => (
          <Card plate={carro.plate} key={carro.plate} status={carro.status} />
        ))}
      </View>
    </ScrollView>
  );
}
