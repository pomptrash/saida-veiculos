import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { styles } from './styles'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'


export function Login({navigation}){
    const [showPassword, setShowPassword] = useState(false)
    return (
      <View style={styles.container}>
        <Text></Text>

        <Text style={styles.title}>
            Entrar
        </Text>
        <View style={styles.form}>
          <Input placeholder={"Matrícula"} placeholderColor={"#fff"} color={"#fff"}/>
          <View style={styles.passwordField}>
            <Input placeholder={"Senha"} placeholderColor={"#fff"} color={"#fff"} secureTextEntry={showPassword} />
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
              <Feather name={!showPassword ? "eye" : "eye-off"} size={16} color={"#fff"}/>
            </TouchableOpacity>
          </View>
        </View>
        <Button text={"Entrar"} onPress={()=>navigation.navigate("CarList")}/>
        <Text></Text>
        <Text></Text>

      </View>
    );
}