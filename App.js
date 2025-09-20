import "react-native-gesture-handler";
import { CarsProvider } from "./src/contexts/carsContext";
import { UserProvider } from "./src/contexts/userContext";
import { Routes } from "./src/routes";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <UserProvider>
      <CarsProvider>
        <Routes />
        <Toast />
      </CarsProvider>
    </UserProvider>
  );
}
