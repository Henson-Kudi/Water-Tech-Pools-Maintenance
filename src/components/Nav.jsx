import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Nav.css'
import logo from './images/logo.png'
import ContactForm from './ContactForm'

function Nav() {
    const deviceWidth = window.innerWidth

    // const [selected, setSelected] = useState('home')
    const [contactStyles, setContactStyles] = useState({
        visibility: 'hidden',
        top: '-30vh'
    })

    const [navStyles, setNavStyles] = useState({
        width: '0px',
        height: '0px',
        visibility: 'hidden',
        right: '0',
        transform: 'translateX(0)',
    })

    const [showNav, setShowNav] = useState(true)
    const [message, setMessage] = useState(false)

    const history = useHistory()

    const formStyles = {
        display: 'grid',
        visibility: contactStyles.visibility,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: contactStyles.top,
        left: '0',
        transition: 'all 1s linear',
        zIndex: '2'
    }

    const navigateStyles = {
        display: 'grid',
        visibility: navStyles.visibility,
        position: 'absolute',
        right: navStyles.right,
        top: '1rem',
        transition: 'all 1s linear',
        transform: navStyles.transform,
        zIndex: '2',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '0.5rem',
    }
    
    return (
        <div className='Nav' id='home'>
            {
                message.message &&
                <div className='successAlert'>{message.message}</div>
            }
            <div className="imageContainer">
                <img src={logo} alt="logo" />
            </div>
            {
                deviceWidth <= 850 &&
                <div className='hamburger'>
                {
                    showNav ? <i className="fas fa-bars fa-lg" onClick={()=>{
                    setNavStyles({
                        transform: 'translateX(50%)',
                        visibility: 'visible',
                        right: '50%',
                    })
                    setShowNav(false)
                }}></i> : <i className="fas fa-times fa-lg" onClick={()=>{
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                }}></i>
                }
            </div>
            }
            <ul className='navList' style={deviceWidth <= 850 ? navigateStyles : {}}>
                <li onClick={()=>{
                    history.push('/')
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                    }}>Home</li>

                <li onClick={()=>{
                    history.push('/services')
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                }}>Services</li>

                <li onClick={()=>{
                    history.push('/projects')
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                    }}>Projects</li>

                <li onClick={()=>{
                    history.push('/about')
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                    }}>About Us</li>

                <li onClick={()=>{
                    setContactStyles({
                        visibility: 'visible',
                        top: '0',
                        transform: 'translateX(0)',
                    })
                    setNavStyles({
                        visibility: 'hidden',
                        right: '0',
                        transform: 'translateX(0)',
                    })
                    setShowNav(true)
                }}><button className="contactButton">Get your work done <br /> Contact Us <i className="fa fa-arrow-right" aria-hidden="true"></i></button></li>
            </ul>
            <ContactForm
                contactStyles={formStyles}
                handleCancel={()=>{
                    setContactStyles({
                        visibility: 'hidden',
                        top: '-30rem',
                    })
                }}
                setMessage={setMessage}
            />
        </div>
    )
}

export default Nav
