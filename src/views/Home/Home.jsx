import React from 'react'
import MultipleItems from "../../assets/MultipleItems.jpg"
import burgerImages from "../../assets/burgerImages.jpg"
import Navbar from '../../Components/Navbar/Navbar'
import "./home.css"

const Home = () => {
  return (
   <>  
        
        <div className="hero-section">
           <Navbar/>
           <img src={MultipleItems} alt="mian" />
          <div className='hero-Details'>
               <h1 className="main-heading">best food for <br/> your taste</h1>
               <p className='msg'>Italian food makes people think og big family dinners. So you can many want to positin your restaurant as a place to bring the whole family</p>
           
            <button className='btn'>Read More</button>
          </div>
         
        </div>




        
   </>
  )
}

export default Home