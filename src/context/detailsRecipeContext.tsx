import React from "react";
import { IMealsInputSearch } from "./InputSearchHomeContext";

// Tipo do retorno com as variaveis e funções que serão acessiveis de toda a aplicação.
type TDetailsRecipe = {
  dataRecipe: IMealsInputSearch | null;
  loading: boolean;
  error: string | null;
  handleFetchRecipe: (id: string) => Promise<void>;
}

// Criação de um contexto que irá englobar toda a aplicação
const DetailsContext = React.createContext<TDetailsRecipe | null>(null)

// Função responsável pelo consumo das variáveis e funções em toda aplicação
// eslint-disable-next-line react-refresh/only-export-components
export const useProviderDetails = () => {
  const context = React.useContext(DetailsContext)
  if(context === null) throw new Error("DetailsContext deve estar dentro do Provider")
  return context
}

// Local da lógica e tratamento dos dados arrecadados pelos botões, inputs, formulários e navegação entre páginas.
export const DetailsRecipeContext = ({ children }: React.PropsWithChildren) => {
  const [dataRecipe, setDataRecipe] = React.useState<IMealsInputSearch | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)


  const handleFetchRecipe = async (id: string | undefined): Promise<void> => {
    
    if(!id){
      setError("ID não veio como esperado.")
    }

    setLoading(true)
    try{

      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()

      if(!data){
        console.log(data)
      }

      setDataRecipe(data)

    }catch{
      setError("Erro ao buscar a receita.")
    }finally{
      setLoading(false)
    }

  }

  return (
    <DetailsContext.Provider value={{
      dataRecipe,
      loading,
      error,
      handleFetchRecipe,
    }}>
      { children }
    </DetailsContext.Provider>
  )
}