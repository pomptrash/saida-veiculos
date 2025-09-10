import { createContext, useContext } from "react";

export const CarsContext = createContext()

export function CarsProvider({children}){

    // const carros = [
//   {
//     carro: "Toyota Corolla",
//     cor: "Prata",
//     km_atual: 25430,
//     plate: "ABC1D23",
//     status: "disponível",
//     image: require("../../../assets/imagens/carros/toyota-prata.png"),
//   },
//   {
//     carro: "Honda Civic",
//     cor: "Preto",
//     km_atual: 18765,
//     plate: "EFG4H56",
//     status: "reservado",
//     image: require("../../../assets/imagens/carros/civic-preto.png"),
//   },
//   {
//     carro: "Volkswagen Golf",
//     cor: "Vermelho",
//     km_atual: 43210,
//     plate: "IJK7L89",
//     status: "em uso",
//     image: require("../../../assets/imagens/carros/golf-vermelho.png"),
//   },
//   {
//     carro: "Ford Focus",
//     cor: "Azul",
//     km_atual: 56789,
//     plate: "MNO0P12",
//     status: "manutenção",
//     image: require("../../../assets/imagens/carros/focus-azul.png"),
//   },
//   {
//     carro: "Chevrolet Cruze",
//     cor: "Branco",
//     km_atual: 32105,
//     plate: "QRS3T45",
//     status: "indisponível",
//     image: require("../../../assets/imagens/carros/cruze-branco.png"),
//   },
//   {
//     carro: "Hyundai HB20",
//     cor: "Cinza",
//     km_atual: 12345,
//     plate: "UVW6X78",
//     status: "disponível",
//     image: require("../../../assets/imagens/carros/hb20-cinza.png"),
//   },
// ];

const carros = [
  { plate: "JOA1O23", model: "ONIX", status: "disponível" },
  { plate: "ABC1D23", model: "COROLLA", status: "em uso" },
  { plate: "EFG4H56", model: "CIVIC", status: "manutenção" },
  { plate: "IJK7L89", model: "GOLF", status: "disponível" },
  { plate: "MNO0P12", model: "FOCUS", status: "disponível" },
  { plate: "JOA1O24", model: "ONIX", status: "em uso" },
  { plate: "ABC1D24", model: "COROLLA", status: "indisponível" },
  { plate: "EFG4H54", model: "CIVIC", status: "reservado" },
  { plate: "IJK7L84", model: "GOLF", status: "reservado" },
  { plate: "MNO0P14", model: "FOCUS", status: "disponível" },
  { plate: "ABC1D25", model: "COROLLA", status: "indisponível" },
  { plate: "EFG4H55", model: "CIVIC", status: "reservado" },
  { plate: "IJK7L85", model: "GOLF", status: "reservado" },
  { plate: "MNO0P54", model: "FOCUS", status: "disponível" },
];
    return(
        <CarsContext.Provider value={{carros}}>
            {children}
        </CarsContext.Provider>
    )
}


export function useCars(){
    return useContext(CarsContext)
}