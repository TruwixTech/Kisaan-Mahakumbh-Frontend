import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserRegistrationForm from './components/UserRegistrationForm.jsx'
import ContactForm from './pages/Contact.jsx'
import About from './pages/About.jsx'
import ContactUs from './components/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path='/registration' element={<UserRegistrationForm />} />
        <Route path='/contact' element={<ContactForm />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
