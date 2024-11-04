import React from 'react'
import lust from '../assets/images/Group_3.png'
import arrow from '../assets/images/arrow.png'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div id='hero'>
      <div className="lust">
        <img src={lust} alt="" />
      </div>
      <div className="textbox">
        <div className="head">
          <div className="box"></div>
          <h1><span>l'm Simbrashe Murahwa.</span></h1>

        </div>
        <h1>Front-End Developer</h1>
        <p>
          As a Web Developer, I am
          responsible for Designing and Developing  Web page. My Primary
          Focus is to create responsive, user-friendly experiences that meet the needs of a diverse
          online audience.
        </p>
        <Link to='/aboutpage'><button>MORE ABOUT ME</button></Link>
        <Link to='/aboutpage' className="arrow">
          <img src={arrow} alt="" />
        </Link>
      </div>
      <nav>
        <NavBar />
      </nav>
    </div>
  )
}

export default Hero
