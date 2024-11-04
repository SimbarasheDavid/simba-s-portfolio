import React from 'react'
import bakkers from '../assets/images/bakersinn.png'
import vanlife from '../assets/images/vanlife.png'
import tigzozo from '../assets/images/tigzozo.png'
import gloria from '../assets/images/aboutGloria.png'
import NavBar from '../components/NavBar'
import downarrow from '../assets/images/down-arrow.png'
import { useState } from 'react'

const WorksPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false)
    const [isOpennn, setIsOpennn] = useState(false)
    const [isOpeN, setIsOpeN] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    const toogleModal = () => {
        setIsOpenn(!isOpenn)
    }
    const tooogleModal = () => {
        setIsOpennn(!isOpennn)
    }
    const toGleModal = () => {
        setIsOpeN(!isOpeN)
    }
    return (
        <div id='works'>
            <h1>My Wo<span>rk</span>s</h1>
            <div className="projects">
                <div className="img">
                    <img src={bakkers} alt="" />
                    <div className="bakersin ">
                        <button onClick={toggleModal} className='bakers open-modal-button'>View project</button>
                        {isOpen && (
                            <div className="modal-overlay" onClick={toggleModal}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <span className='close-button' onClick={toggleModal}>&times;</span>
                                    <div className="link">
                                    <h2>Please Click below</h2>
                                        <div className="down-arrow">
                                            <img src={downarrow} alt="" />
                                        </div>
                                        <a href="">Welcome to Baker's Inn</a>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
                <div className="img">
                    <img src={vanlife} alt="" />
                    <div className="van">
                        <button onClick={toogleModal} className='vanlife open-modal-button'>View project</button>
                        {isOpenn && (
                            <div className="modal-overlay" onClick={toogleModal}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <span className='close-button' onClick={toogleModal}>&times;</span>
                                    <div className="link">
                                        <h2>Please Click below</h2>
                                        <div className="down-arrow">
                                            <img src={downarrow} alt="" />
                                        </div>
                                        <a href="">Welcome to Vanlife Car rental</a>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
                <div className="img">
                    <img src={tigzozo} alt="" />
                    <div className="tigz">
                        <button onClick={tooogleModal} className='tigzozo open-modal-button'>View project</button>
                        {isOpennn && (
                            <div className="modal-overlay" onClick={tooogleModal}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <span className='close-button' onClick={tooogleModal}>&times;</span>
                                    <div className="link">
                                        <h2>Please Click below</h2>
                                        <div className="down-arrow">
                                            <img src={downarrow} alt="" />
                                        </div>
                                        <a href="">Welcome to Tigzozo Media</a>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
                <div className="img">
                    <img src={gloria} alt="" />
                    <div className="gloria">
                        <button onClick={toGleModal} className='glo open-modal-button'>View project</button>
                        {isOpeN && (
                            <div className="modal-overlay" onClick={toGleModal}>
                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                    <span className='close-button' onClick={toGleModal}>&times;</span>
                                    <div className="link">
                                        <div className="down-arrow">
                                            <h2>Please Click Below</h2>
                                            <img src={downarrow} alt="" />
                                        </div>
                                        <a href="">Welcome to Gloria</a>

                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </div>
            <nav>
                <NavBar />
            </nav>
        </div>
    )
}

export default WorksPage
