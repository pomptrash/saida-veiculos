import { createDrawerNavigator } from "@react-navigation/drawer";
import { useCars } from "../contexts/carsContext";
import { StackRoutes } from "./stack.routes";

const Drawer = createDrawerNavigator();

// NAVEGAÇÃO COM GAVETA LATERAL COM OS RESPECTIVOS STATUS DOS VEÍCULOS

export function DrawerRoutes() {
  //  USO DO CONTEXTO
  const { cars } = useCars();

  //   FILTRA OS STATUS PARA RETORNAR SEM REPETIÇÕES
  const uniqueStatuses = [...new Set(cars.map((car) => car.status))];

  return (
    <Drawer.Navigator
      initialRouteName="disponível"
      screenOptions={{
        drawerType: "front",
        swipeEnabled: true,
        headerTitle: "Veículos",
      }}
    >
      {/* CRIA AS ROTAS DINAMICAMENTE DE ACORDO COM O STATUS RETORNADO */}
      {uniqueStatuses.map((status) => (
        <Drawer.Screen
          key={status}
          name={status}
          //   RENDERIZA UM COMPONENTE DE NAVEGAÇÃO STACK QUE CONTÉM A LISTA DE CARROS E OS DETALHES AO CLICAR EM CADA CARD, PASSA O STATUS ATUAL COMO PROP PARA A STACK
          children={() => <StackRoutes status={status} />}
          options={{ drawerLabel: status.toUpperCase() }}
        />
      ))}
    </Drawer.Navigator>
  );
}
