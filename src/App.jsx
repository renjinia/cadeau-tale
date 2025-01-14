
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
