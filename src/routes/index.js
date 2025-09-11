import { NavigationContainer } from "@react-navigation/native";

import { DrawerRoutes } from "./drawer.routes";
// CRIAÇÃO DO CONTEXTO DE NAVEGAÇÃO
//  ATUALMENTE A ROTA PRINCIPAL É A DRAWER
export  function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}