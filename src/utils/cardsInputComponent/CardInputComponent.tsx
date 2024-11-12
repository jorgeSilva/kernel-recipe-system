import React from 'react'
import style from './CardInputComponent.module.css'
import iconDetailsButton from '../../assets/home/Vector-1.svg'
import { useNavigate } from 'react-router-dom';

type TMeal = {
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

const CardInputComponent = (item: TMeal) => {

  const navigate = useNavigate()

  const handleDetailsRecipe = () => {
    navigate(`/details/${item.idMeal}`)
  }

  return (
    <div className={style.card_input_content}>
      <div className={style.card_input_content_img}>
        <img className={style.card_input_img} src={item.strMealThumb} alt="Imagem do Card" />
      </div>
      <div className={style.card_input_content_text}>
        <h2>{item.strMeal}</h2>

        <ul className={style.card_input_ul}>
          <li>{item?.strMeasure1} {item?.strIngredient1}</li>
          <li>{item?.strMeasure2} {item?.strIngredient2}</li>
          <li>{item?.strMeasure3} {item?.strIngredient3}</li>
          <li>{item?.strMeasure4} {item?.strIngredient4}</li>
          ...
        </ul>
        
        <div className={style.card_input_button_details_content}>
          <button className={style.card_input_button} onClick={handleDetailsRecipe}> 
            Detalhes <img src={iconDetailsButton} alt="Icone botão detalhes" />
          </button>
        </div>
       </div>
    </div>
  )
}

export default CardInputComponent