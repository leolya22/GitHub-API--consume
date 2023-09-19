import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import User from './pages/Home/User/User'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/user/:user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
