import { View, Text } from "react-native";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { styles } from "./styles";
import { useState } from "react";
import { useUserContext } from "../../../contexts/userContext";
import Toast from "react-native-toast-message";

export function Login({ navigation }) {
  const [hidePassowrd, setHidePassowrd] = useState(true);
  const [matricula, setMatricula] = useState("");
  const { users, setLoggedUser } = useUserContext();

  // encontre o usuário que corresponde à matrícula informada e o defina como 'LoggedUser'
  const user = users?.find((user) => user.matricula === matricula);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.form}>
        <Input
          placeholder={"Matrícula"}
          placeholderColor={"#fff"}
          color={"#fff"}
          setSecureTextEntry={false}
          onChangeText={setMatricula}
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
      <Button
        text={"Entrar"}
        onPress={() => {
          // caso o user seja válido
          if (user) {
            setLoggedUser(user); // o define como usuário logado
            navigation.navigate("Home"); // redireciona para a home
          } else {
            return Toast.show({
              type: "error",
              text1: "Usuário inválido",
              text2: "Matrícula não localizada",
            });
          }
        }}
      />
    </View>
  );
}
