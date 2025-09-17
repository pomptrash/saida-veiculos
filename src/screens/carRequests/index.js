import { Text } from "react-native";
import { Carlist } from "../carList";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function CarRequests() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solicitações pendentes</Text>
      <Carlist status={"solicitado"} />
    </SafeAreaView>
  );
}
