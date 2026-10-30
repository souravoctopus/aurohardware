import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import CategoryGroup from './pages/CategoryGroup'
import CategoryDetail from './pages/CategoryDetail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home-decor" element={<CategoryGroup key="home-decor" group="home-decor" />} />
        <Route path="home-decor/:slug" element={<CategoryDetail group="home-decor" />} />
        <Route path="hardware" element={<CategoryGroup key="hardware" group="hardware" />} />
        <Route path="hardware/:slug" element={<CategoryDetail group="hardware" />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
