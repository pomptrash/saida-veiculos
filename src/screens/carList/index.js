import { View, Text } from "react-native";
import { useCars } from "../../contexts/carsContext";
import { Card } from "../../components/card";
import { styles } from "./styles";


// COMPONENTE QUE LISTA OS VEÍCULOS RESPECTIVOS DE CADA STATUS
//  RECEBE AS PROPS ROUTE E NAVIGATION DIRETAMENTE DA ROTA STACK
export function Carlist({route, navigation}) {
  const { cars } = useCars();
  //  RECEBE STATUS DA NAVEGAÇÃO STACK ATRAVÉS DE ROUTE, ACESSA EM .PARAMS
  const { statusProp } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{statusProp}</Text>
      <View style={styles.carList}>
        {cars
        // FILTA OS CARROS DE ACORDO COM O STATUS PASSADO
          .filter((car) => car.status === statusProp)
          .map((car) => (
            // RENDERIZA UM CARD PARA CADA CARRO E DEFINE A NAVEGAÇÃO PARA ABRIR OS DETALHES DO CARRO NO OnPress, PASSANDO O OBJETO CAR COMO PROP PARA COMPONENTE DE DETALHES
            <Card plate={car.plate} key={car.plate} status={car.status} onPress={() => navigation.navigate('Detalhes', {car})}/>
          ))}
      </View>
    </View>
  );
}
