import { TouchableOpacity,Text } from "react-native";
import { styles } from "./styles";

export function Button({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: text==='recusar'? '#e33': '#fff'}]}>
            <Text style={[styles.btnText, {color: text==='recusar'? '#fff': '#000'}]}>{text}</Text>
        </TouchableOpacity>
    )
}