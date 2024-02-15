import './App.css'
import LoginLogoutPage from './components/loginLogout/LoginLogoutPage'
import HomePage from "./components/home/HomePage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PageLayout from './components/pagelayout/PageLayout'
import ProfilePage from './components/profilePage/ProfilePage'
import useAuthStore from './store/useAuthStore'

function App() {

  const authUser = useAuthStore(state => state.user);

  return (<>

    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? (<Navigate to={'/home'} />) : (<LoginLogoutPage />)} />
          <Route path="/home" element={authUser ? (<HomePage />) : (<Navigate to={'/'} />)} />
          <Route path="/:user" element={authUser ? (<ProfilePage />) : (<Navigate to={'/'} />)} />
        </Routes>
      </PageLayout>
    </BrowserRouter>

  </>





  )
}

export default App


