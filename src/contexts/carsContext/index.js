import { createContext, useContext } from "react";

export const CarsContext = createContext();

// CONTEXTO CRIADO PARA PASSAR OS CARROS PARA OS COMPONENTES. POR ENQUANTO, O ARMAZENAMENTO ESTÁ SENDO FEITO EM ARRAY ANTES DA IMPELEMENTAÇÃO DO BANCO DE DADOS.

export function CarsProvider({ children }) {
  const cars = [
    {
      carro: "Toyota Corolla",
      cor: "Prata",
      km_atual: 25430,
      plate: "ABC1D23",
      status: "solicitado",
      image: require("../../../assets/imagens/carros/toyota-prata.png"),
    },
    {
      carro: "Honda Civic",
      cor: "Preto",
      km_atual: 18765,
      plate: "EFG4H56",
      status: "reservado",
      image: require("../../../assets/imagens/carros/civic-preto.png"),
    },
    {
      carro: "Volkswagen Golf",
      cor: "Vermelho",
      km_atual: 43210,
      plate: "IJK7L89",
      status: "em uso",
      image: require("../../../assets/imagens/carros/golf-vermelho.png"),
    },
    {
      carro: "Ford Focus",
      cor: "Azul",
      km_atual: 56789,
      plate: "MNO0P12",
      status: "manutenção",
      image: require("../../../assets/imagens/carros/focus-azul.png"),
    },
    {
      carro: "Chevrolet Cruze",
      cor: "Branco",
      km_atual: 32105,
      plate: "QRS3T45",
      status: "indisponível",
      image: require("../../../assets/imagens/carros/cruze-branco.png"),
    },
    {
      carro: "Hyundai HB20",
      cor: "Cinza",
      km_atual: 12345,
      plate: "UVW6X78",
      status: "disponível",
      image: require("../../../assets/imagens/carros/hb20-cinza.png"),
    },
  ];

  return (
    <CarsContext.Provider value={{ cars }}>{children}</CarsContext.Provider>
  );
}

export function useCars() {
  return useContext(CarsContext);
}
