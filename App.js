import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Home} from './src/telas/home'
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Home/>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity style={styles.newExitButton}>
        <Feather name='plus' size={40} color={'white'}></Feather>
      </TouchableOpacity>

    </KeyboardAvoidingView>
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
