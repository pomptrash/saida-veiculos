import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Feather } from "@expo/vector-icons";
import { CarRequests } from "../screens/carRequests";
import { useCars } from "../contexts/carsContext";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const { cars } = useCars();
  const requestsCount = cars.filter(
    (car) => car.status.toLowerCase() === "solicitado"
  ).length;
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#071",
        }}
      />

      <Tab.Screen
        name="Solicitações"
        component={CarRequests}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#071",
          tabBarBadge: requestsCount,
        }}
      />
    </Tab.Navigator>
  );
}
