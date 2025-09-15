import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

export function Input({setLabel=false, label, type, placeholder, placeholderColor, color, onChangeText, value, secureTextEntry}){
    return (
        <View style={styles.inputContainer}>
            {setLabel && (<Text style={styles.label}>{label}</Text>)}
            <TextInput style={styles.input} keyboardType={type} placeholder={placeholder} placeholderTextColor={placeholderColor} color={color} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry}/>
        </View>
    )
}