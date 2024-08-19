import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Header from './components/header/Header'
import Main from './routes/Main'
import Footer from './components/footer/Footer'
import Login from './routes/Login'
import useRefresh from './hooks/useRefresh'
import CreatePost from './routes/CreatePost'
import Posts from './routes/Posts'
import Search from './routes/Search'
import PostDetail from './routes/PostDetail'
import Apply from './routes/Apply'

function App() {
	useRefresh();

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/upload' element={<CreatePost />} />
				<Route path='/search' element={<Search />} />
				<Route path='/post/:id' element={<PostDetail />} />
        <Route path='/apply/:postId' element={<Apply />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
