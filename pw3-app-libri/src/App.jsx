import './App.css'
import CardBooks from './components/CardBooks'
import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    <>

      <CardBooks
        titulo='Tipos Psicológicos'
        autor='Carl Jung'
        imagem={capaLivro}
      />
    

    </>
  )
}

export default App
