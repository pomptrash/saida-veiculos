import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Carlist } from "../screens/carList";
import { CarDetails } from "../screens/carDetails";

const Stack = createNativeStackNavigator()

// NAVEGAÇÃO EM PILHA PARA NAVEGAR ENTRE A LISTA DE VEÍCULOS (SEPARADOS POR STATUS NA NAVEGAÇÃO DRAWER) E OS DETALHES DE CADA VEÍCULO INDIVIDUALMENTE

// RECEBE A PROP STATUS DA NAVEGAÇÃO DRAWER

export function StackRoutes({status}){
    return (
        <Stack.Navigator   screenOptions={{headerStyle: {backgroundColor: '#eee'}, headerShadowVisible: false}}>
            {/* PASSA STATUS (statusProp) PARA O COMPONENTE CARLIST QUE LISTA OS VEÍCULOS DE CADA STATUS */}
            <Stack.Screen options={{headerShown:false}} name="CarList" component={Carlist} initialParams={{statusProp: status}}/>
            <Stack.Screen name="Detalhes" component={CarDetails} options={{headerTitle:'Detalhes'}}/>
        </Stack.Navigator>
    )
}