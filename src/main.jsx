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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path='/registration/:id?' element={<UserRegistrationForm />} />
        <Route path='/contact-us' element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsers" element={<Sponsers />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<Newevent />} />
        <Route path="/event" element={<Event />} />
      </Route>
    </>
  )
)
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 