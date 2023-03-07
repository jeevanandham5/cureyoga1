import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/zen1.png'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
   <>
   <header>
    <div className='navbar'>
      <a href="/">
      <img src={logo} alt='logo'  className='logo'/></a>
      <h1>CUREYOGA</h1>
    </div>
    <div className='navlink'>
      <NavLink to={'/'}   className="link">Home</NavLink>
      <NavLink to={'/About'} className="link">About</NavLink>
      <NavLink to={'/'} className="link">Blog</NavLink>
      <NavLink to={'/Login'} className="link">Login</NavLink>
    </div>
    <div className='ham'>
    <MenuIcon  sx={{color:'#fff' ,fontSize:'58px',"&:hover":{color:'#000',background:'#009bc4',borderRadius:'100px'}}}/>
    </div>
   </header>
 
   </>
  )
}

export default Navbar