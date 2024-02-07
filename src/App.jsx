import './App.css'
import LoginLogoutPage from './components/loginLogout/LoginLogoutPage'
import HomePage from "./components/home/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageLayout from './components/pagelayout/PageLayout'
import ProfilePage from './components/profilePage/ProfilePage'

function App() {


  return (<>


    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<LoginLogoutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/:user" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>

  </>





  )
}

export default App


