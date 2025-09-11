import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/card";
import { Button } from "../../components/button";

// EXEMPLO DO OBJETO
//   carro: "Toyota Corolla",
//   cor: "Prata",
//   km_atual: 25430,
//   plate: "ABC1D23",
//   status: "solicitado",
//   image: require("../../../assets/imagens/carros/toyota-prata.png"),

// COMPONENTE QUE RENDEREIZAOS DETALHES DO CARRO.
// OS DADOS SÃO PASSADOS COMO PROPS ATRAVÉS DO ROUTE E ACESSADOS EM ROUTE.PARAMS
// SÃO PASSADOS PELO COMPONENTE CARLIST, ATRAVÉS DO OnPress

export function CarDetails({ route }) {
    // RECEBE O OBJETO COM OS DADOS DO RESPECTIVO CARRO CLICADO NO CARLIST
  const { car } = route.params;
  return (
    <View style={styles.container}>
      <Card plate={car.plate} status={car.status} />
      <Image style={styles.image} source={car.image} />
      <Text style={styles.title}>
        {car.carro}, {car.cor}
      </Text>
      <Text style={styles.text}>Quilometragem atual: {car.km_atual} km</Text>

    {/* DE ACORDO COM CADA STATUS, SERÁ APRESENTADA AS OPÇÕES QUE SERÃO EXECUTADAS PELO USUÁRIO RESPONSÁVEL (AINDA SERÁ IMPLEMENTADO) */}

    {/* EXEMPLO: QUANDO O CARRO FOR SOLICITADO, FICARÁ A ENCARGO DO USUÁRIO RESPONSÁVEL PELA LIBERAÇÃO */}
      {car.status == "solicitado" && (
        <View>
          <Text style={styles.text}> Solicitado por: </Text>
          <View style={styles.btnContainer}>
            <Button text="aceitar" />
            <Button text="recusar" />
          </View>
        </View>
      )}

      {/* UMA VEZ QUE O CARRO FOR LIBERADO, O PORTEIRO FICARÁ RESPONSÁVEL PELA LIBERAÇÃO DO CARRO PARA SÁIDA */}
      {car.status == "reservado" && (
        <View>
          <Text style={styles.text}> Solicitado por: </Text>
          <View style={styles.btnContainer}>
            <Button text="liberar" />
            <Button text="recusar" />
          </View>
        </View>
      )}

      {/* SE O CARRO TIVER DISPONÍVEL, O USUÁRIO PODERÁ SOLICITAR UMA SAÍDA COM ELE E O STATUS MUDARÁ PARA SOLICITADO */}
      {car.status == "disponível" && (
        <View>
          <Text style={styles.text}> Solicitado por: </Text>
          <View style={styles.btnContainer}>
            <Button text="solicitar saída" />
          </View>
        </View>
      )}
    </View>
  );
}
