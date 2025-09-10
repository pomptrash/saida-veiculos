import { View, Text } from "react-native";
import { useCars } from "../../contextos/carros";
import { Card } from "../../componentes/card";
import { styles } from "./styles";

export function ReservedCars() {
  const { carros } = useCars();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veículos reservados</Text>
      <View style={styles.carList}>
        {carros
          .filter((carro) => carro.status === "reservado")
          .map((carro) => (
            <Card plate={carro.plate} key={carro.plate} status={carro.status} />
          ))}
      </View>
    </View>
  );
}
