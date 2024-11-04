import React from 'react'
import home from '../assets/images/Vector.png'
import { NavLink} from 'react-router-dom'
import about from '../assets/images/contact.png'
import works from '../assets/images/briefcase.png'
import mail from '../assets/images/mail.png'

import { useState } from 'react'
const NavBar = () => {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const updateMenu = () => {
    if(!isMenuClicked){
        setBurgerClass('burger-bar clicked')
        setMenuClass('menu visible')
    }
    else{
        setBurgerClass('burger-bar unclicked')
        setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
}
  return (
    <div id='nav-bar'>

      <nav>
        <ul className='nav-links menuActive'>
          <NavLink to='/'><li><img src={home} alt="" /></li></NavLink>
          <NavLink to='/aboutpage'><li><img src={about} alt="" /></li></NavLink>
          <NavLink to='/workspage'><li><img src={works} alt="" /></li></NavLink>
          <NavLink to='/contactpage'><li><img src={mail} alt="" /></li></NavLink>
        </ul>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
        <div className={menu_class}>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/aboutpage'><li>About Me</li></NavLink>
                <NavLink to='/workspage'><li>Works</li></NavLink>
                <NavLink to='/contactpage'><li>Conatct Me</li></NavLink>
                
            </div>
      </nav>

    </div>
  )
}

export default NavBar
