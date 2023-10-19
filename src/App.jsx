import Titulo from './components/Titulo'
import Footer from './components/Footer'
import Article from './components/Article'
import Array from './components/Array'

import Objeto from './components/Objeto'

import './App.css'


function App() {


  return (
    <>
      
      <Titulo/> 
      <Article 
          mensaje="Soy un mensaje que pasa por props"
      />
      <hr></hr>
      <Array/>
      <hr></hr>

      <hr></hr>
      <Objeto/>
      <hr></hr>



      <Footer/>
      
      
    </>
  )
}

export default App
