import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
         flex: 1, 
         justifyContent: "flex-start", 
         alignItems: "center",
         gap: 20,
         marginTop: 50
    },
    title:{
        fontSize: 32, 
        fontWeight: '800'
    },
    text:{
        fontSize: 24,
        fontWeight:'bold'
    },
    image:{
        width: 300,
        height: 150
    },
    btnContainer:{
        flexDirection:'row',
        gap:10,
        margin:50
    }
})