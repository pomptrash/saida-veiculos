import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff9",
        width: 340,
        height: 200,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        gap: 8,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderColor: '#0002'
    },

    carImage:{
        width:180,
        height:100,
        alignSelf: 'center'
    },

    carDetails:{
        width: 130,
        height: 160,
        padding: 10,
        borderRadius: 8
    },
    text:{
        color: '#000',
        fontWeight:'bold',
        textTransform: 'uppercase'
    },
    status:{
        backgroundColor:'red',
        width: 150,
        height: 25,
        position: 'absolute',
        bottom: -10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export const statusColors = {
  'disponível': '#4CAF50',    // Verde
  'reservado': '#FF9800',     // Laranja
  'em uso': '#2196F3',      // Azul
  'manutenção': '#FFEB3B',    // Amarelo (talvez com texto escuro)
  'indisponível': '#F44336'   // Vermelho
};