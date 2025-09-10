import { View, Text, ScrollView } from "react-native";
import { Card } from "../../componentes/card/";
import { styles } from "./styles";
import { useCars } from "../../contextos/carros";

export function Home() {
  const { carros } = useCars()

  return (
    <ScrollView contentContainerStyle={styles.container} style={{flex:1, marginBottom: 40}} >
      <Text style={styles.title}>Veículos</Text>
      <View style={styles.carList}>
        {carros.map((carro) => (
          <Card plate={carro.plate} key={carro.plate} status={carro.status} />
        ))}
      </View>
    </ScrollView>
  );
}
