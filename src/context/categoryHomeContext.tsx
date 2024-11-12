import React from "react";

type TCategory = {
  dataCategories: ICategories | null;
  dataRecipeCategories: IRecipesCategory | null;
  cardNameOption: string | null;
  loadingCategories: boolean;
  loadingRecipeCategories: boolean;
  errorCategories: string | null;
  setcardNameOption: React.Dispatch<React.SetStateAction<string | null>>;
  handleDataCategoryTypes: () => Promise<void>;
  handleRecipeOfCategory: (categoryRecipe: string) => Promise<void>;
}

export interface ICategories {
  categories: [
    {
      idCategory: string;
      strCategory: string;
      strCategoryDescription: string;
      strCategoryThumb: string;
    }
  ]
}

export interface IRecipesCategory {
  meals: [{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }]
}

const CategoryHomeContext = React.createContext<TCategory | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useProviderCategory = () => {
  const context = React.useContext(CategoryHomeContext)
  if(context === null) throw new Error("CategoryHomeContext deve estar dentro do Provider ")
  return context
}

export const CategoryContext = ({ children }: React.PropsWithChildren) => {
  const [dataCategories, setDataCategories] = React.useState<ICategories | null>(null)
  const [dataRecipeCategories, setDataRecipeCategories] = React.useState<IRecipesCategory | null>(null)
  const [cardNameOption, setcardNameOption] = React.useState<string | null>(null)
  const [loadingCategories, setLoadingCategories] = React.useState<boolean>(false)
  const [loadingRecipeCategories, setLoadingRecipeCategories] = React.useState<boolean>(false)
  const [errorCategories, setErrorCategories] = React.useState<string | null>(null)

  const handleDataCategoryTypes = async (): Promise<void> => {
    setLoadingCategories(true)
    try{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      const data: ICategories = await response.json()
      setDataCategories(data)
    }catch{
      setErrorCategories("Erro ao buscar receitas")
    }finally{
      setLoadingCategories(false)
    }
  }

  const handleRecipeOfCategory = async (categoryRecipe: string): Promise<void> => {

    setLoadingCategories(true)
    try{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryRecipe}`)
      const data: IRecipesCategory = await response.json()

      setDataRecipeCategories(data)
    }catch{
      setErrorCategories("Erro ao buscar receitas")
    }finally{
      setLoadingRecipeCategories(false)
    }
  }

  return (
    <CategoryHomeContext.Provider value={{
      dataCategories,
      dataRecipeCategories,
      cardNameOption,
      loadingCategories,
      loadingRecipeCategories,
      errorCategories,
      setcardNameOption,
      handleDataCategoryTypes,
      handleRecipeOfCategory
    }}>
      { children }
    </CategoryHomeContext.Provider>
  )
}