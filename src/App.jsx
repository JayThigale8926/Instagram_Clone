import { useEffect, useState } from 'react'
import './App.css'
import LoginLogoutPage from './components/loginLogout/LoginLogoutPage'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      console.log("It is Dark")
    }
    else {
      document.documentElement.classList.remove('dark')
      console.log("It is Light")
    }
  }, [isDark])

  const handleTheme = () => {
    setIsDark(!isDark)

  }



  return (

    <div className="h-screen bg-white dark:bg-black duration-100">

      <div className="">

        {/* <button className='bg-blue-400 p-2 text-lg' onClick={handleTheme}>Click</button> */}
      </div>

      <LoginLogoutPage />
    </div>

  )
}

export default App
