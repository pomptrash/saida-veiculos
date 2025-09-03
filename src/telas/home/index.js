import { View, Text } from "react-native";
import { Card } from "../../componentes/card/";
import { styles } from "./styles";

const carros = [
  {
    carro: "Toyota Corolla",
    cor: "Prata",
    km_atual: 25430,
    placa: "ABC1D23",
    status: "disponível",
    image: require('../../../assets/imagens/carros/toyota-prata.png')
  },
  {
    carro: "Honda Civic",
    cor: "Preto",
    km_atual: 18765,
    placa: "EFG4H56",
    status: "reservado",
    image: require('../../../assets/imagens/carros/civic-preto.png')
  },
  {
    carro: "Volkswagen Golf",
    cor: "Vermelho",
    km_atual: 43210,
    placa: "IJK7L89",
    status: "em uso",
    image: require('../../../assets/imagens/carros/golf-vermelho.png')
  },
  {
    carro: "Ford Focus",
    cor: "Azul",
    km_atual: 56789,
    placa: "MNO0P12",
    status: "manutenção",
    image: require('../../../assets/imagens/carros/focus-azul.png')

  },
  {
    carro: "Chevrolet Cruze",
    cor: "Branco",
    km_atual: 32105,
    placa: "QRS3T45",
    status: "indisponível",
    image: require('../../../assets/imagens/carros/cruze-branco.png')

  },
  {
    carro: "Hyundai HB20",
    cor: "Cinza",
    km_atual: 12345,
    placa: "UVW6X78",
    status: "disponível",
    image: require('../../../assets/imagens/carros/hb20-cinza.png')

  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Veículos</Text>
      {carros.map((carro) => (
        <Card
          carro={carro.carro}
          cor={carro.cor}
          km={carro.km_atual}
          placa={carro.placa}
          status={carro.status}
          image={carro.image}
        />
      ))}
    </View>
  );
}


