import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
