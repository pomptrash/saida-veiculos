import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
    width: 160,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderRightWidth: 2,
    borderBottomWidth:2,
    borderColor: '#0004',
  },

  header:{
    backgroundColor: '#00f',
    height: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerText:{
    color:'#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  image:{
    width: 20,
    height: 15
  },

  plate:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  plateText:{
    fontSize: 28,
    fontWeight: 'bold',
  },

  BR:{
    position: 'absolute',
    bottom: 0,
    left: 5,
    fontSize: 10,
    fontWeight: 'bold'
  },

  status: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10, 
    borderRadius: 8,
  },
  statusText:{
    textTransform: 'uppercase',
    fontSize: 16
  }
})

export const statusColor = {
  'disponível': '#4CAF50',
  'reservado': '#00BCD4',
  'em uso': '#2196F3',
  'manutenção': '#FFEB3B',
  'indisponível': '#F44336',
  'solicitado': '#9C27B0',
};