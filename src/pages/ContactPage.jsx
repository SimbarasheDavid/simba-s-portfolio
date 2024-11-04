import React from 'react'
import linkd from '../assets/images/linked.png'
import git from '../assets/images/git.png'

import numbre from '../assets/images/messenger.png'
import NavBar from '../components/NavBar'
const ContactPage = () => {
    return (
        <div id='contact'>
            <h1>Contact-<span>Me</span></h1>
            <div className="textform">
                <form action="mailto:simbarashedavidmurahwa@gmail.com" method='post'>

                    <input type="text" placeholder='your name' required />


                    <input type="email" placeholder='your email' required/>

                    <textarea name="" id="" placeholder='your message' required></textarea>
                    <input id='submit' type="button" value="submit" />
                </form>
                <div className="text">

                    <div className="texto">
                        <div className="four">
                            <img src={git} alt="" />

                        </div>
                        <div className="four">
                            <img src={linkd} alt="" />

                        </div>

                        <div className="four">
                            <img src={numbre} alt="" />

                        </div>
                    </div>

                </div>

            </div>
<nav>
    <NavBar/>
</nav>
        </div>
    )
}

export default ContactPage
