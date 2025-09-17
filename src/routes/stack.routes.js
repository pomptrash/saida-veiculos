import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDetails } from "../screens/carDetails";
import { Login } from "../screens/auth/login";
import { TabRoutes } from "./tab.routes";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#eee" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={CarDetails}
        options={{ headerTitle: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}
