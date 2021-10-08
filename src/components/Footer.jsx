import React, {useState} from 'react'
import footerImage from './images/footerImage.jpg'
import './Footer.css'
import ContactForm from './ContactForm'

function Footer() {
    const [contactStyles, setContactStyles] = useState({
        visibility: 'hidden',
        top: '-30vw'
    })

    const [message, setMessage] = useState(false)

    const formStyles = {
        display: 'grid',
        visibility: contactStyles.visibility,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: contactStyles.top,
        transform: 'translateY(-50%)',
        left: '0',
        transition: 'all 1s linear',
        zIndex: '2'
    }

    return (
        <div className="FooterTop">
            <div className="Footer">
                <div className="footerInfo">
                    <div className="footerImageCont">
                        <img src={footerImage} alt="pool cleaning" />
                    </div>

                    <div className="footerInfoText">
                        <h2>
                            If you are eager to start a new pool renovation project or construct a new pool from scratch, we're experienced, established, and ready to get to work.
                        </h2>
                        <p>
                            For over a decade, we've helped hundreds of pool owners like you create better relaxation spaces with forward-thinking design, experience-driven insight, and expert level craftsmanship.
                        </p>
                    </div>
                </div>

                <div className="contactInfos">
                    <div className="addressInfo">
                        <h3>Water Tech Pools &copy; {new Date().getFullYear()} </h3>

                        <div className="socialMediaIcons">
                            <p>M26 17St - Moussaffa, Abu Dhabi</p>
                            <p>United Arab Emirates</p>
                        </div>
                    </div>
                    <div className="addressInfo">
                        <h3>Contact Us </h3>

                        <p className='contactUsHeading'>We're always open to discussing collaboration opportunities with other professional trades. Go ahead and introduce yourself.</p>
                        <div className="socialMediaIcons">
                            <p className='linkItem' onClick={()=>{
                            setContactStyles({
                                visibility: 'visible',
                                top: '50%',
                                
                            })
                        }}> <a href="#home">Send us email</a> </p>
                            <p className='linkItem'><a href="tel:+971588629213">Call Us</a></p>
                        </div>
                    </div>

                    <div className="addressInfo">
                        <h3>Follow Us On Social Media</h3>

                        <div className="socialMediaIcons">
                            <p className='linkItem'> <a href='http://facebook.com/' target='_blank'>
                                <i className="fab fa-facebook"></i> Facebook
                            </a> </p>
                            <p className='linkItem'> <a href='http://instagram.com/' target='_blank'>
                                <i className="fab fa-instagram"></i> Instagram
                            </a> </p>
                            <p className='linkItem'> <a href='http://linkedIn.com/' target='_blank'>
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a> </p>
                            <p className='linkItem'> <a href='http://twitter.com/' target='_blank'>
                                <i className="fab fa-twitter"></i> Twitter
                            </a> </p>
                        </div>
                    </div>
                    
                </div>
            </div>
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

export default Footer
