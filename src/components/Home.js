import React from 'react'
import '../home.css'
import logo from '../images/zen1.png'
import swipeup from '../images/swipe1.gif'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='container-home'>
        
        <div className='title'>
        <img src={logo} alt='logo'  className='logo'/>
        <h3>Cureyoga</h3>
        <h4>Follow Your Heart</h4>
        <img src={swipeup}alt='gif' className='gif'/>
        </div>
       
    </div>
    
    <div className='contant-home'>
           <h3>what we are doing</h3>
          <div className='card'>
            <div className='item1'>
          <div className='contant'>
            <h4>
Experienced Yoga Teacher</h4>
<NavLink to={'About'}><button >More</button></NavLink>

          </div>
              
              </div> 
              <div className='item2'>
              <div className='contant'>
              <button>More</button>
              <h4>weekly yoga class</h4>
              </div>
              </div> 
              <div className='item3'>
              <div className='contant'>
              <button >More</button>
              <h4>Aura Reading </h4></div>
              </div> 
            

          </div>
          <div className='card'>
            <div className='item4'> <div className='contant'>
            <button >More</button>
              <h4>Pranic healing </h4></div>
              </div> 
              <div className='item5'> <div className='contant'>
              <button >More</button>
              <h4>Counseling</h4></div>
             
              </div> 
              <div className='item6'> <div className='contant'>
              <button >join now</button>
              <h4>Group meditation </h4>
              
              </div>
              </div> 
             

          </div>
          </div>
         
    </>
  )
}

export default Home