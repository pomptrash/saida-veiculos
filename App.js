import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Home} from './src/telas/home'

export default function App() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Home/>
        </SafeAreaView>
      </ScrollView>
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
});
