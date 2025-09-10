import { View, Text } from "react-native";
import { useCars } from "../../contextos/carros";
import { Card } from "../../componentes/card";
import { styles } from "./styles";

export function MaintenanceCars() {
  const { carros } = useCars();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veículos em manutenção</Text>
      <View style={styles.carList}>
        {carros
          .filter((carro) => carro.status === "manutenção")
          .map((carro) => (
            <Card plate={carro.plate} key={carro.plate} status={carro.status} />
          ))}
      </View>
    </View>
  );
}
