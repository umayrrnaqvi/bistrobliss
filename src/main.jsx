import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import Navbar from './componants/Navbar'
import { BrowserRouter } from 'react-router'
import Footer from './componants/Footer'

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <StrictMode>
    <Navbar></Navbar>
    <App/>
    <Footer></Footer>
  </StrictMode>,
  </BrowserRouter>
)
