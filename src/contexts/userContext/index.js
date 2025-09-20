import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // teste de usuário logado
  const [loggedUser, setLoggedUser] = useState("");

  // array para testar lógica do tipo de usuário
  const users = [
    {
      nome: "Carlos Silva",
      matricula: "2023001",
      tipoUsuario: "administrador",
    },
    {
      nome: "Ana Oliveira",
      matricula: "2023002",
      tipoUsuario: "autorizador",
    },
    {
      nome: "João Santos",
      matricula: "2023003",
      tipoUsuario: "solicitante",
    },
    {
      nome: "Maria Costa",
      matricula: "2023004",
      tipoUsuario: "porteiro",
    },
    {
      nome: "Pedro Almeida",
      matricula: "2023005",
      tipoUsuario: "solicitante",
    },
  ];

  return (
    <UserContext.Provider value={{ users, loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
