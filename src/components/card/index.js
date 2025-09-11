import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles, statusColor } from "./styles";

// CARD SIMULANDO UMA PLACA DE CARRO, MOSTRA A PLACA E O STATUS DO VEÍCULO

export function Card({ plate, status, onPress }) {
  return (
    <View style={{ alignItems: "center", gap: 3 }}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/mercosul-flag.png")}
            style={styles.image}
          />
          <Text style={styles.headerText}>brasil</Text>
          <Image
            source={require("../../../assets/brazil-flag-icon.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.plate}>
          <Text style={styles.plateText}>{plate}</Text>
        </View>
        <Text style={styles.BR}>BR</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.status,
          { backgroundColor: statusColor[status] || "#000" },
        ]}
      >
        <Text style={[{ color: "#fff" }, styles.statusText]}>{status}</Text>
      </View>
    </View>
  );
}
