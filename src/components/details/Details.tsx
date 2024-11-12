import React from 'react'
import style from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import iconGoBackHome from '../../assets/details/Vector.svg'
import iconButtonHome from '../../assets/details/Home.svg'
import { useProviderDetails } from '../../context/detailsRecipeContext'

const Details = () => {

  const { _id } = useParams()

  const { 
    dataRecipe,
    loading,
    error,
    handleFetchRecipe, 
   } = useProviderDetails()

  console.log(dataRecipe)
  
  React.useEffect(() => {
    if(typeof _id === 'string' ){
      handleFetchRecipe(_id)
    }
  }, [])

  return (
    <section className='home_discovery_container'>
      <section className='home_discovery_content'>
        <section className={style.details_content_go_back}>
          <Link to={'/'}>
            <span>
              <img src={iconGoBackHome} alt="Icone para voltar a home do site." />
            </span>
            <span>
              <img src={iconButtonHome} alt="Botão 'Home' para voltar" />
            </span>
          </Link>
        </section>

        {
          error ?
          <p>{error}</p> : loading ? 
          <div className='content_loader'><span className="loader"></span></div> : dataRecipe &&
          dataRecipe.meals.map((item) => (
            <section className={style.details_content_recipe}>
              <h1 className={style.details_title_recipe}>
                { item.strMeal } - {item.strArea}
              </h1>

              <div className={style.details_content_img}>
                <div className={style.details_img_recipe}>
                  <img src={item.strMealThumb} alt="Imagem referente ao prato." />
                </div>
              </div>

              <div className={style.details_content_ingredients}>
                <h2 className={style.details_h2}>Ingredientes</h2>

                <ul className={style.details_ingredients_list}>
                  { item.strMeasure1 && <li>{item?.strMeasure1} {item?.strIngredient1} </li> }
                  { item.strMeasure2 && <li>{item?.strMeasure2} {item?.strIngredient2} </li> }
                  { item.strMeasure3 && <li>{item?.strMeasure3} {item?.strIngredient3} </li> }
                  { item.strMeasure4 && <li>{item?.strMeasure4} {item?.strIngredient4} </li> }
                  { item.strMeasure5 && <li>{item?.strMeasure5} {item?.strIngredient5} </li> }
                  { item.strMeasure6 && <li>{item?.strMeasure6} {item?.strIngredient6} </li> }
                  { item.strMeasure7 && <li>{item?.strMeasure7} {item?.strIngredient7} </li> }
                  { item.strMeasure8 && <li>{item?.strMeasure8} {item?.strIngredient8} </li> }
                  { item.strMeasure9 && <li>{item?.strMeasure9} {item?.strIngredient9} </li> }
                  { item.strMeasure10 && <li>{item?.strMeasure10} {item?.strIngredient10} </li> }
                  { item.strMeasure11 && <li>{item?.strMeasure11} {item?.strIngredient11} </li> }
                  { item.strMeasure12 && <li>{item?.strMeasure12} {item?.strIngredient12} </li> }
                  { item.strMeasure13 && <li>{item?.strMeasure13} {item?.strIngredient13} </li> }
                  { item.strMeasure14 && <li>{item?.strMeasure14} {item?.strIngredient14} </li> }
                  { item.strMeasure15 && <li>{item?.strMeasure15} {item?.strIngredient15} </li> }
                  { item.strMeasure16 && <li>{item?.strMeasure16} {item?.strIngredient16} </li> }
                  { item.strMeasure17 && <li>{item?.strMeasure17} {item?.strIngredient17} </li> }
                  { item.strMeasure18 && <li>{item?.strMeasure18} {item?.strIngredient18} </li> }
                  { item.strMeasure19 && <li>{item?.strMeasure19} {item?.strIngredient19} </li> }
                  { item.strMeasure20 && <li>{item?.strMeasure20} {item?.strIngredient20} </li> }

                </ul>
              </div>

              <div className={style.details_content_instructions}>
                <h2 className={style.details_h2} style={{paddingTop: '2rem'}}>Instruções</h2>
                <p>{item.strInstructions}</p>
              </div>
            </section>
          ))
        }
      </section>
    </section>
  )
}

export default Details