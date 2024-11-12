import React from 'react'
import style from './InputSearch.module.css'
import iconSearchButton from '../../assets/home/Vector.svg'
import { useProviderInputSearch } from '../../context/InputSearchHomeContext'

const InputSearch = () => {

  const { 
    handleSearchRecipePage,
    handleInputSearchRecipe
   } = useProviderInputSearch()

  return (
    <div className={style.input_search_content}>
      <input placeholder='Busque pelo nome do principal ingrediente...' type="text" onChange={handleInputSearchRecipe}/>
      <button className={style.input_search_button_search_recipe} onClick={handleSearchRecipePage}>
        <img src={iconSearchButton} alt="Ícone lupa" />
      </button>
    </div>
  )
}

export default InputSearch