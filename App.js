import { StyleSheet } from 'react-native';
import { Home } from './src/screens/home';
import "react-native-gesture-handler";
import { CarsProvider } from './src/contexts/carsContext';


export default function App() {
  return (
    <CarsProvider>
      {/* <Login/> */}
      <Home/>
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


});
