import React, {useState} from 'react'
import { baseURL as axios} from './axios'
import './ContactForm.css'

function ContactForm({contactStyles, handleCancel, message, setMessage}) {
    const [contactDetails, setContactDetails] = useState({})

    const handleChange = (e)=>{
        const {name, value}  = e.target
        setContactDetails(prev => (
            {
                ...prev,
                [name] : value,
            }
        ))
    }

    const handleSubmit = async() => {

        if (contactDetails.name) {
            if (contactDetails.email) {
                if (contactDetails.tel) {
                    if (contactDetails.message) {
                        await axios.post('/client-request', contactDetails)
                        .then(async res => {
                            const response = await res.data
                            setMessage(response)
                            handleCancel()
                            setTimeout(() =>{
                                setMessage({})
                            }, 3000)
                        })
                        setContactDetails('')
                    }else{
                        alert('Please fill all fields')
                    }
                }else{
                    alert('Please fill all fields')
                }
            }else{
                alert('Please fill all fields')
            }
        }else{
            alert('Please fill all fields')
        }
    }



    return (
        <div className="Contact" style={contactStyles}>
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
                    <button className="btn btnSubmit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
