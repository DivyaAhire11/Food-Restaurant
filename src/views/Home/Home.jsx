import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import gulabjamun from '../../assets/gulabjamun.webp'
import vadaRecipe from "../../assets/vadaRecipe.jpg"
import Khamang from "../../assets/Khamang.webp"

import "./home.css"

const Home = () => {
  return (
   <>  
         {/* <img src= {gulabjamun} alt="dish" className='gulabJamun'/>      */}
       
        <div className="hero-section">
           <Navbar/> 
           {/* <img src={vadaRecipe} alt='vadarecipies' className='vadarecipies'/> */}
           {/* <img src={food1} alt="main" /> */}
           <img src ={Khamang} />
          <div className='hero-Details'>
               
               <h1 className="main-heading">best food for <br/> your taste</h1>
               <p className='msg'>Italian food makes people think og big family dinners. So you can many want to positin your restaurant as a place to bring the whole family</p>
           
            <button className='btn'>Read More</button>
              
          </div>
         
        </div>

          <div className="categories">
           
          </div>


        
   </>
  )
}

export default Home