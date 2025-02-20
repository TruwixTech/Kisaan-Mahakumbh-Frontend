import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Donation from './components/Donation'
import RegisterPopup from './components/RegisterPopup'

function App() {

  return (
    <>
      <Outlet />
      <Donation />
      <RegisterPopup />
      <Footer />
    </>
  )
}

export default App
