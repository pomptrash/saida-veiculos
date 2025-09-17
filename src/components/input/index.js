import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export function Input({
  type,
  placeholder,
  placeholderColor,
  color,
  onChangeText,
  value,
  setSecureTextEntry,
  secureTextEntry,
  hidePassowrd,
  setHidePassowrd,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        color={color}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {setSecureTextEntry && (
        <TouchableOpacity
          style={{ position: "absolute", right: 10 }}
          onPress={() => setHidePassowrd(!hidePassowrd)}
        >
          <Feather
            name={hidePassowrd ? "eye" : "eye-off"}
            size={20}
            color={"#fff"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
