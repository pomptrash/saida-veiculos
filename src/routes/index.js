import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

// CRIAÇÃO DO CONTEXTO DE NAVEGAÇÃO
//  ATUALMENTE A ROTA PRINCIPAL É A DRAWER
export  function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}