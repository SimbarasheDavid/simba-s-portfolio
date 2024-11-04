import React from 'react'
import download from '../assets/images/download.png'
import NavBar from '../components/NavBar'
import prog1 from '../assets/images/Group 5.png'
import prog2 from '../assets/images/Group 7.png'
import prog4 from '../assets/images/Group 6.png'
import prog5 from '../assets/images/Group 9.png'
import prog6 from '../assets/images/Group 7.png'
import prog7 from '../assets/images/Group 8.png'
import prog8 from '../assets/images/Group 8.png'
import downloadResume from '../../data/resume'

const AboutPage = () => {
    return (
        <div>
            <div id='bout'>
                <h1>About <span>Me</span></h1>
                <div className="personal">
                    <div className="info">
                        <h1>Personal info</h1>
                        <p>First Name: <span>Simbarashe</span></p>
                        <p>Last Name: <span>Murahwa</span></p>
                        <p>Age: <span>24 Years</span></p>
                        <p>Nationality: <span>Zimbabwean</span></p>
                        <button download onClick={downloadResume}>Download Cv</button>
                        <div className="downlo">
                            <img onClick={downloadResume} src={download} alt="" />
                        </div>
                    </div>

                    <fieldset>
                        <p>Simbarashe David Murahwa is a front-end developer specializing in JavaScript, React.js, and HTML5. With a strong passion for creating seamless user interfaces, l blend creativity and technical expertise to build interactive and responsive web applications. l thrive on crafting modern web solutions, continuously learning the latest tools and trends to stay ahead in the fast-evolving tech landscape. Based in Zimbabwe, l enjoy collaborating with diverse teams, problem-solving, and delivering high-quality code that enhances user experience.</p>
                    </fieldset>
                    <nav>
                        <NavBar />
                    </nav>

                </div>

            </div>
            <div id="skillz">
                <h1>My Ski<span>ll</span>s</h1>
                <div className="progress">
                    <div className="prog">
                        <img src={prog1} alt="" />
                        <h2>HTML 5</h2>
                    </div>
                    <div className="prog">
                        <img src={prog2} alt="" />
                        <h2>CSS</h2>
                    </div>
                    <div className="prog">
                        <img src={prog2} alt="" />
                        <h2>SASS</h2>
                    </div>
                    <div className="prog">
                        <img src={prog4} alt="" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="prog">
                        <img src={prog5} alt="" />
                        <h2>Next.js</h2>
                       
                    </div>
                    <div className="prog">
                        <img src={prog6} alt="" />
                        <h2>React</h2>
                    </div>
                    <div className="prog">
                        <img src={prog7} alt="" />
                        <h2>Tailwind</h2>
                    </div>
                    <div className="prog">
                        <img src={prog8} alt="" />
                        <h2>Node.js</h2>
                    </div>
                </div>
            </div>
<div id="logo-imgs">
    
</div>
        </div>

    )
}

export default AboutPage
