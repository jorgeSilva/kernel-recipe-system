import React from 'react'
import style from './Home.module.css'
import InputSearchHomeComponent from '../../utils/inputSearchHomeComponent/InputSearchHomeComponent'
import { useProviderInputSearch } from '../../context/InputSearchHomeContext'
import { useProviderCategory } from '../../context/categoryHomeContext'
import CardCollectionComponent from '../../utils/cardsCategoriesComponent/CardCategoriesComponent'
import CardInputComponent from '../../utils/cardsInputComponent/CardInputComponent'

const Home = () => {

  const {
    inputValue,
    error,
    dataSearchRecipe,
    loadingSearchRecipe
  } = useProviderInputSearch()


  const {
    dataCategories,
    dataRecipeCategories,
    cardNameOption,
    loadingRecipeCategories,
    errorCategories,
    handleDataCategoryTypes,
  } = useProviderCategory()

  console.log(dataSearchRecipe)
  console.log(dataRecipeCategories)

  React.useEffect(() => {
    handleDataCategoryTypes()
  }, [])

  return (
    <section className='home_discovery_container'>
      <section className='home_discovery_content'>
        <InputSearchHomeComponent />
        
        <section>
          {
            ( 
              error ? 
              <p>{error}</p> : loadingSearchRecipe ? 
              <div className='content_loader'><span className="loader"></span></div> : dataSearchRecipe ? 
              <>
                <h2 className={style.home_content_itens_category_title}> 
                  Encontrado por: <span style={{color: "var(--p2)"}}>"{inputValue}"</span>
                </h2>
                <section className={style.home_content_itens_input_search}>
                  {
                    dataSearchRecipe.meals.map((item) => (
                      <CardInputComponent key={item.idMeal} {...item} />
                    ))
                  }
                </section>
              </>
              :
              <p style={{textAlign: 'center', marginTop: '2rem'}}>Clique nos cards abaixo ou insira algum ingrediente no campo de busca. Aperte no botão do ícone para realizar a pesquisa.</p>
            )
          }
        </section>

        <section>
          <h2 className={style.home_content_itens_category_title}>
            {
              cardNameOption ? 
              <>
                Categoria: <span style={{color: "var(--p2)"}}>"{cardNameOption}"</span>
              </> :
              <>
                Categorias
              </>
            }
          </h2>
          {
            ( 
              errorCategories ? 
              <p>{errorCategories}</p> : loadingRecipeCategories ? 
              <div className='preview_loading'>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
                <div className="preview_iten"></div>
              </div> : dataCategories &&
              <div className={style.home_content_itens_category}>
                {
                  dataCategories.categories.map((item) => (
                    <CardCollectionComponent item={item} key={item.idCategory}/>
                    
                  ))
                }
            </div>
            )
          }
        </section>
      </section>
    </section>
    
  )
}

export default Home