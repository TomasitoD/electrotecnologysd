import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Las páginas del catálogo (fichas de producto) no hacen falta en la
// primera carga del landing — se cargan aparte, solo cuando alguien
// navega a /productos, para no pesar el bundle inicial en móvil.
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos/:categorySlug"
          element={
            <Suspense fallback={null}>
              <CategoryProducts />
            </Suspense>
          }
        />
        <Route
          path="/productos/:categorySlug/:productSlug"
          element={
            <Suspense fallback={null}>
              <ProductDetail />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
