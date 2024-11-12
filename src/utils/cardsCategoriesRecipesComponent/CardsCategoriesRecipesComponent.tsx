import React from 'react'
import iconDetailsButton from '../../assets/home/Vector-1.svg'
import style from './cardsCategoriesRecipes.module.css'
import { useNavigate } from 'react-router-dom';

export interface IRecipesCategory {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CardsCategoriesRecipesComponent = (item: IRecipesCategory) => {

  const navigate = useNavigate()

  const handleDetailsRecipe = () => {
    navigate(`/details/${item.idMeal}`)
  }

  return (
    <div className={style.card_categories_content}>
      <div className={style.card_categories_content_img}>
        <img className={style.card_categories_img} src={item.strMealThumb} alt="Imagem do Card" />
      </div>
      <div className={style.card_categories_content_text}>
        <h2>{item.strMeal}</h2>
        
        <div style={{paddingTop: '2rem'}} className={style.card_categories_button_details_content}>
          <button className={style.card_categories_button} onClick={handleDetailsRecipe}> 
            Detalhes <img src={iconDetailsButton} alt="Icone botão detalhes" />
          </button>
        </div>
       </div>
    </div>
  )
}

export default CardsCategoriesRecipesComponent