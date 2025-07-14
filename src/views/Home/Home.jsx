import React from 'react'
import MultipleItems from "../../assets/MultipleItems.jpg"
import burgerImages from "../../assets/burgerImages.jpg"
import Chakli from "../../assets/chakli.jpg"
import Navbar from '../../Components/Navbar/Navbar'
import food1 from '../../assets/food1.jpg'
import "./home.css"

const Home = () => {
  return (
   <>  
        
        <div className="hero-section">
           <Navbar/>
           <img src={food1} alt="main" />
          <div className='hero-Details'>
               <h1 className="main-heading">best food for <br/> your taste</h1>
               <p className='msg'>Italian food makes people think og big family dinners. So you can many want to positin your restaurant as a place to bring the whole family</p>
           
            <button className='btn'>Read More</button>
          </div>
         
        </div>

          <div className="categories">
            <img src={ Chakli} className='burger'/>
          </div>


        
   </>
  )
}

export default Home