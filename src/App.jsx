import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
