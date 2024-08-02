import './App.css'
import CardBooks from './components/CardBooks'

function App() {

  return (
    <>

      <CardBooks
        titulo='Tipos Psicológicos'
        autor='Carl Jung'
      />
    
      <CardBooks
        titulo='O Hobbit'
        autor='J.R.R. Tolkien'
      />

      <CardBooks
        titulo='Senhor dos Aneis: A Sociedade do Anel'
        autor='J.R.R. Tolkien'
      />

    </>
  )
}

export default App
