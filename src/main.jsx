import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserRegistrationForm from './components/UserRegistrationForm.jsx'
import ContactForm from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Sponsers from './pages/Sponsers.jsx'
import Newevent from './pages/Newevent.jsx'
import Event from './pages/Event.jsx'
import { ToastContainer } from "react-toastify";
import Termscondition from './pages/Termscondition.jsx'
import Refundspage from './pages/Refundspage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Admin from './pages/Admin.jsx'
import Adminlogin from './pages/Adminlogin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="/:id?" element={<Home />} />
        <Route path='/registration/:id?' element={<UserRegistrationForm />} />
        <Route path='/contact-us/:id?' element={<ContactForm />} />
        <Route path="/gallery/:id?" element={<Gallery />} />
        <Route path="/sponsers/:id?" element={<Sponsers />} />
        <Route path="/about/:id?" element={<About />} />
        <Route path="/news/:id?" element={<Newevent />} />
        <Route path="/event/:id?" element={<Event />} />
        <Route path="/termscondition/:id?" element={<Termscondition />} />
        <Route path="/refundspage/:id?" element={<Refundspage />} />
        <Route path="/privacy-policy/:id?" element={<PrivacyPolicy />} />
      </Route>
        <Route path="/admin-login" element={<Adminlogin />} />
        <Route path="/admin" element={<Admin />} />
    </>
  )
)
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>,
)
 