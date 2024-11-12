import style from './InputSearchHomeComponent.module.css'
import InputSearch from '../inputSearch/InputSearch'

const InputSearchHomeComponent = () => {
  return (
    <section className={style.input_search_home_content}>
      <h1 className={`input_search_home_title ${style.input_search_home_h1}`}>
        O que pretende prepara para hoje?
      </h1>
      <div className={style.input_search_home_input_container}>
        <InputSearch />
      </div>
    </section>
  )
}

export default InputSearchHomeComponent