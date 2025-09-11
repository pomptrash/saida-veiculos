import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Routes } from './src/routes';
import "react-native-gesture-handler";
import { CarsProvider } from './src/contexts/carsContext';


export default function App() {
  return (
    <CarsProvider>
      <Routes/>
      <TouchableOpacity style={styles.newExitButton} >
          <Feather name="plus" size={40} color={"white"}></Feather>
        </TouchableOpacity>
    </CarsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },

  newExitButton:{
    backgroundColor: '#033',
    width:70,
    height:70,
    borderRadius: 50,
    position: 'absolute',
    bottom: 40,
    left: '75%',
    justifyContent:'center',
    alignItems: 'center'
  }
});
