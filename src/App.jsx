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
import UpdateUser from './routes/UpdateUser'
import ViewUser from './routes/ViewUser'
import ViewMyUser from './routes/ViewMyUser'
import ViewInfluencer from './routes/ViewInfluencer'
import MyPosts from './routes/MyPosts'
import ApplyList from './routes/ApplyList'
import ViewMyInfluencer from './routes/ViewMyInfluencer'
import ManageMyInfluencer from './routes/ManageMyInfluencer'
import ViewApplication from './routes/ViewApplication'
import UpdateApplication from './routes/UpdateApplication'

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
        <Route path='/application/:applyId' element={<ViewApplication />} />
        <Route path='/update-application/:applyId' element={<UpdateApplication />} />
        <Route path='/users/:id' element={<ViewUser />} />
				<Route path='/update-user' element={<UpdateUser />} />
				<Route path='/mypage' element={<ViewMyUser />} />
        <Route path='/influencers/:id' element={<ViewInfluencer />} />
        <Route path='/myposts' element={<MyPosts />} />
        <Route path='/applies/:id' element={<ApplyList />} />
        <Route path='/my-influencer' element={<ViewMyInfluencer />}></Route>
        <Route path='/register-influencer' element={<ManageMyInfluencer mode="register" />}></Route>
        <Route path='/update-influencer' element={<ManageMyInfluencer mode="update" />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
