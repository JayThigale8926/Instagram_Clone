import { useEffect, useState } from 'react'
import './App.css'
import LoginLogoutPage from './components/loginLogout/LoginLogoutPage'
import HomePage from "./components/home/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageLayout from './components/pagelayout/PageLayout'

function App() {


  return (<>


    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<LoginLogoutPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>

  </>





  )
}

export default App


