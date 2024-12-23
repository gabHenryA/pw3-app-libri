/*IMPORTA COMPONENTES DE NAVEGAÇÃO DA APLICAÇÃO*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'
import DetailBooks from './components/pages/DetailBooks'
import DeleteBook from './components/pages/DeleteBook'
import UpdateBook from './components/pages/UpdateBook'
import Home from './components/pages/Home'

function App() {

  return (
    <>

      {/*ESTRUTUIRA DE NAVEGAÇÃO*/}
      <BrowserRouter>
      
        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/createBooks' element={<CreateBooks/>}/>
              <Route path='/listBooks' element={<ListBooks/>}/>
              <Route path='/detailBooks/:cod_livro' element={<DetailBooks/>}/>
              <Route path='/deleteBook/:cod_livro' element={<DeleteBook/>}/>
              <Route path='/updateBook/:cod_livro' element={<UpdateBook/>}/>

            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </>
  )
}

export default App
