import react,{ useState } from 'react'
import reactDOM from "react-dom";
import './App.css';
//importing components
import Navbar from "./components/NavbarComponent" 
import Hero from "./components/Hero"
function App() {
return (
  <div>
     <Navbar />
    <Hero />

     
</div>
  )
}

export default App
