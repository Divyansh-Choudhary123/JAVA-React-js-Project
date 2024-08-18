import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="head">
    <div className="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQJFPy05S_rjlAPmIJtRexWEw7NDTVnCp40YCr8XKtg&s" alt="" />
        <div className="space">
          <input type="text" />
        
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar