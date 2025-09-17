import "react-native-gesture-handler";
import { CarsProvider } from "./src/contexts/carsContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <CarsProvider>
      <Routes />
    </CarsProvider>
  );
}
