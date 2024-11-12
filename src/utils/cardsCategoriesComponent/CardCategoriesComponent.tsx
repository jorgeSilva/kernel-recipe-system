import React from 'react'
import style from './CardCategories.module.css'
import { useProviderCategory } from '../../context/categoryHomeContext';

type TCardItensDTO = {
  item: {
    idCategory: string;
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
  }
}

const CardCollectionComponent = ({ item }: TCardItensDTO) => {

  const {
    cardNameOption,
    setcardNameOption,
    handleRecipeOfCategory, 
  } = useProviderCategory()

  return (
    <>
      {
        ( 
          cardNameOption === item.strCategory ?
          <button className={style.card_categories_card_active} onClick={async () => {
            setcardNameOption(item.strCategory)
            handleRecipeOfCategory(item.strCategory)
          }}>
            <img className={style.card_categories_card_img} src={`${item.strCategoryThumb}`} alt="" />
            <h3 className={style.card_categories_card_name}>{item.strCategory}</h3>
          </button>
          :
          <button className={style.card_categories_card} onClick={async () => {
            setcardNameOption(item.strCategory)
            handleRecipeOfCategory(item.strCategory)
          }}>
            <img className={style.card_categories_card_img} src={`${item.strCategoryThumb}`} alt="" />
            <h3 className={style.card_categories_card_name}>{item.strCategory}</h3>
          </button>
        )
      }
    </>
  )
}

export default CardCollectionComponent