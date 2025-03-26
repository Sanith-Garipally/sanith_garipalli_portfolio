import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'



// Css links
import './index.css'
import 'lenis/dist/lenis.css'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
