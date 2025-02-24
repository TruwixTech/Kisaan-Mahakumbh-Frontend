import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Donation from './components/Donation'
import RegisterPopup from './components/RegisterPopup'
import RegisterNow from './components/RegisterNow'

function App() {

  return (
    <>
      <Outlet />
      <Donation />
      <RegisterNow />
      <RegisterPopup />
      <Footer />
    </>
  )
}

export default App
