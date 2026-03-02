import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
          <div className="navbar-logo">
              <h2>نقطة وصل</h2>
          </div>
          <ul className='navbar-links'>
              <li><a href="#">الرئيسية</a></li>
              <li><a href="#about">عن المبادرى</a></li>
              <li><a href="#impact">أثرنا</a></li>
              <li><button className='nav-btn'>تبرع الان</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar