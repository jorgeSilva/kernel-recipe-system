import React from "react";

// Tipo do retorno com as variaveis e funções que serão acessiveis de toda a aplicação.
type TInputSearch = {
  dataSearchRecipe: IMealsInputSearch | null;
  inputValue: string | null;
  error: string | null;
  loadingSearchRecipe: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string | null>>;
  handleSearchRecipePage: () => void;
  handleInputSearchRecipe: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

// Interface reerente ao dado de retorno da API de terceiros que consumimos
export interface IMealsInputSearch {
  meals: [
    {
      dateModified: string;
      idMeal: string;
      strArea: string;
      strCategory: string;
      strCreativeCommonsConfirmed: string;
      strDrinkAlternate: string;
      strImageSource: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7: string;
      strIngredient8: string;
      strIngredient9: string;
      strIngredient10: string;
      strIngredient11: string;
      strIngredient12: string;
      strIngredient13: string;
      strIngredient14: string;
      strIngredient15: string;
      strIngredient16: string;
      strIngredient17: string;
      strIngredient18: string;
      strIngredient19: string;
      strIngredient20: string;
      strInstructions: string;
      strMeal: string;
      strMealThumb: string;
      strMeasure1: string;
      strMeasure2: string;
      strMeasure3: string;
      strMeasure4: string;
      strMeasure5: string;
      strMeasure6: string;
      strMeasure7: string;
      strMeasure8: string;
      strMeasure9: string;
      strMeasure10: string;
      strMeasure11: string;
      strMeasure12: string;
      strMeasure13: string;
      strMeasure14: string;
      strMeasure15: string;
      strMeasure16: string;
      strMeasure17: string;
      strMeasure18: string;
      strMeasure19: string;
      strMeasure20: string;
      strSource: string;
      strTags: string;
      strYoutube: string;
    }
  ]
}

// Criação de um contexto que irá englobar toda a aplicação
const InputSearchHomeContext = React.createContext<TInputSearch | null>(null)

// Função responsável pelo consumo das variáveis e funções em toda aplicação
// eslint-disable-next-line react-refresh/only-export-components
export const useProviderInputSearch = () => {
  const context = React.useContext(InputSearchHomeContext)
  if (context === null) throw new Error("InputSearchHomeContext deve estar dentro do Provider")
  return context
}

// Local da lógica e tratamento dos dados arrecadados pelos botões, inputs, formulários e navegação entre páginas.
export const InputSearchContext = ({ children }: React.PropsWithChildren) => {
  const [inputValue, setInputValue] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [dataSearchRecipe, setDataSearchRecipe] = React.useState<IMealsInputSearch | null>(null)
  const [loadingSearchRecipe, setLoadingSearchRecipe] = React.useState<boolean>(false)

  const handleSearchRecipePage = async (): Promise<void> => {
    if(!inputValue) setError("Valor buscado não pode ser nulo.")
    
    setLoadingSearchRecipe(true)
    try{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)

      const data = await response.json()
      
      if(data.meals === null) setError(`Não temos o que está buscando: "${inputValue}". Tente escrever em inglês.`)

      setDataSearchRecipe(data)
    }catch{
      setError("Erro ao buscar receitas")
    }finally{
      setLoadingSearchRecipe(false)
    }
  }

  const handleInputSearchRecipe = ({ target }: React.ChangeEvent<HTMLInputElement>) =>{
    // Limpando todo erro da aplicação antes de escrever 
    setDataSearchRecipe(null)
    setError(null)
    setInputValue(target.value)
  }

  return (
    <InputSearchHomeContext.Provider
      value={{
        dataSearchRecipe,
        inputValue,
        loadingSearchRecipe,
        error,
        setInputValue,
        handleSearchRecipePage,
        handleInputSearchRecipe
      }}
    >
      {children}
    </InputSearchHomeContext.Provider>
  );
};