import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'




const App = () => {

  return(
    <BrowserRouter> 
    
    <NavBar/>

    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/about' element={<About />}/>
    <Route exact path='/contact' element={<ContactUs />}/>

    </Routes>

    </BrowserRouter>

  )
}

export default App
