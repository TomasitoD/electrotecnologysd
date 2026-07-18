import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CategoryProducts from './pages/CategoryProducts'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:categorySlug" element={<CategoryProducts />} />
        <Route path="/productos/:categorySlug/:productSlug" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}
