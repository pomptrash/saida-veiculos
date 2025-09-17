import { View, Text } from "react-native";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { styles } from "./styles";
import { useState } from "react";

export function Login({ navigation }) {
  const [hidePassowrd, setHidePassowrd] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.form}>
        <Input
          placeholder={"Matrícula"}
          placeholderColor={"#fff"}
          color={"#fff"}
          setSecureTextEntry={false}
        />
        <Input
          placeholder={"Senha"}
          placeholderColor={"#fff"}
          color={"#fff"}
          setSecureTextEntry={true}
          secureTextEntry={hidePassowrd}
          setHidePassowrd={setHidePassowrd}
          hidePassowrd={hidePassowrd}
        />
      </View>
      <Button text={"Entrar"} onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
