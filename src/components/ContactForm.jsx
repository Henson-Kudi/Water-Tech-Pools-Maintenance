import React, {useState, useRef} from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({contactStyles, handleCancel, message, setMessage}) {
    const [contactDetails, setContactDetails] = useState({})
    const form = useRef();

    const handleChange = (e)=>{
        const {name, value}  = e.target
        setContactDetails(prev => (
            {
                ...prev,
                [name] : value,
            }
        ))
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ypi7l5l', 'template_lplb987', form.current, 'user_LhB6BmKHXG6o83l1skINd')
        .then((result) => {
            toast('Message received. We\'ll contact you soon.')
            setTimeout(() =>{
                handleCancel()
                setMessage({})
            }, 3000)
        }, (error) => {
            console.log(error.text);
        });
    }



    return (
        <div className="Contact" style={contactStyles}>
            <form ref={form} onSubmit={sendEmail}>
                <div className="formContainer">
                    <h3>Contact Form</h3>
                    <div className="formElement">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id='name' value={contactDetails.name} onChange={handleChange} placeholder="Name" />
                    </div>

                    <div className="formElement">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id='email' value={contactDetails.email} onChange={handleChange} placeholder="Email" />
                    </div>

                    <div className="formElement">
                        <label htmlFor="tel">Telephone</label>
                        <input type="text" name="tel" id='tel' value={contactDetails.tel} onChange={handleChange} placeholder="Mobile Number" />
                    </div>

                    <div className="formElement">
                        <textarea type="text" name="message" id='message' value={contactDetails.message} onChange={handleChange} placeholder="Message" />
                    </div>

                    <div className="submitOptions">
                        <button className="btn btnCancel" onClick={handleCancel}>Cancel</button>
                        <button className="btn btnSubmit" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default ContactForm
