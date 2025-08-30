import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home.jsx'
import Menu from './views/Menu/MenuProduct.jsx'
function App() {

  return (
    <>
       <div className="main-container">
           <Home/>
            <Menu/>
           {/* <About/>
          
           <Shop/>
           <Blog/>
           <Contact/>    */}
       </div>
    
    </>
  )
}

export default App
