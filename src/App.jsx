import { Home } from './components/Home'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Favorite } from './components/Favorite'
import { SpesificProduct } from './components/SpesificProduct'




function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/products/:id' element={<SpesificProduct />}/>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  )
}

export default App
