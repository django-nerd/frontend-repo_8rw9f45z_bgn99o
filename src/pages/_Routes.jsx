import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Product from './Product'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import Search from './Search'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:slug" element={<Category/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
  )
}
