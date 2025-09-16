import { View } from "react-native";
import { Card } from "../../components/card";
import { styles } from "./styles";
import { useCars } from "../../contexts/carsContext";

export function Carlist({ status, exceptionStatus = false }) {
  const { cars } = useCars();
  let statusFilter;

  // caso exceptionStatus=true, vai retornar todos os veícuos exceto o status passado
  if (exceptionStatus) {
    statusFilter = cars.filter(
      (car) => car?.status.toLowerCase() !== status?.toLowerCase()
    );
  } else {
    statusFilter = cars.filter(
      (car) => car?.status.toLowerCase() === status?.toLowerCase()
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.carList}>
        {statusFilter.map((car) => (
          <Card plate={car.plate} key={car.plate} status={car.status} />
        ))}
      </View>
    </View>
  );
}
