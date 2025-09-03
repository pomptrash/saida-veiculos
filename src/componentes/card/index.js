import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles, statusColors } from "./styles";

export function Card({ carro, cor, km, placa, status, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={[
          styles.status,
          { backgroundColor: statusColors[status] || "#033" },
        ]}
      >
        <Text style={styles.text}>{status}</Text>
      </View>
      <Image source={image} style={styles.carImage} />

      <View style={styles.carDetails}>
        <Text style={styles.text}>{carro}</Text>
        <Text style={styles.text}>Cor: {cor}</Text>
        <Text style={styles.text}>Km Atual: {km}</Text>
        <Text style={styles.text}>Placa: {placa}</Text>
      </View>
    </TouchableOpacity>
  );
}
