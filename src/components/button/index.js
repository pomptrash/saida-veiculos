import { TouchableOpacity,Text } from "react-native";
import { styles } from "./styles";

export function Button({text}){
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: text==='recusar'? '#e33': '#033'}]}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}