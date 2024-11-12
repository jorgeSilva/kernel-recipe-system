import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar.tsx'
import Footer from './components/footer/Footer.tsx'
import { Route, Routes } from 'react-router-dom'
import Details from './components/details/Details.tsx'
import PageNotFound from './components/pageNotFound/PageNotFound.tsx'
import { InputSearchContext } from './context/InputSearchHomeContext.tsx'
import { CategoryContext } from './context/categoryHomeContext.tsx'
import { DetailsRecipeContext } from './context/detailsRecipeContext.tsx'

function App() {

  return (
    <CategoryContext>
      <InputSearchContext>
        <DetailsRecipeContext>
          <Navbar />
          <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Details />} path='/details/:_id' />
              <Route element={<PageNotFound />} path='*' />
          </Routes>
          <Footer />
        </DetailsRecipeContext>
      </InputSearchContext>
    </CategoryContext>
  )
}

export default App