import { createDrawerNavigator } from "@react-navigation/drawer";

import { AvailableCars } from "../telas/availableCars";
import { Home } from "../telas/home";
import { ReservedCars } from "../telas/reservedCars";
import { InUseCars } from "../telas/inUseCars";
import { MaintenanceCars } from "../telas/maintenanceCars";
import { UnvailableCars } from "../telas/unavailableCars";

const Drawer = createDrawerNavigator()

export function DrawerRoutes(){
    return(
        <Drawer.Navigator initialRouteName='Home' screenOptions={{
            drawerType:'front',
            swipeEnabled: true,
        }}>
            <Drawer.Screen name="Home" component={Home} options={{title:'Todos os carros'}}/>
            <Drawer.Screen name="Available Cars" component={AvailableCars} options={{title:'Carros disponíveis'}} />
            <Drawer.Screen name="Reserved Cars" component={ReservedCars} options={{title:'Carros reservados'}} />
            <Drawer.Screen name="In use cars" component={InUseCars} options={{title:'Carros em uso'}} />
            <Drawer.Screen name="Maintenance Cars" component={MaintenanceCars} options={{title:'Carros em manutenção'}} />
            <Drawer.Screen name="Unvailable Cars" component={UnvailableCars} options={{title:'Carros indisponíveis'}} />
            



        </Drawer.Navigator>
    )
}