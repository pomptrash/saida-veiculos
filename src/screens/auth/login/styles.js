import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'#033'
    },
    title:{
        fontSize: 32,
        fontWeight:'bold',
        color:"#fff"
    },
    form: {
        gap: 20
    },
    passwordField:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})