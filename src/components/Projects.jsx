import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'
import './Projects.css'
import { baseURL } from './axios'
import app from './firebase/index'
const db = app.firestore()

function Pojects() {

    const [projects, setProjects] = useState([])
    const [length, setLength] = useState(9)

    const history = useHistory()

    useEffect(() => {
    const fetch = async () => {
      const projectsList = await db.collection('projects').get()
      setProjects(projectsList.docs.map(doc => (
        doc.data()
      )))
    }

    fetch()
  }, [])
    
    return (
        <div>
            <div className="Projects">
            {
                projects?.sort((a, b) => b.id - a.id).slice(0, length).map(item => (
                    <div className="elementGrid" key={item._id} onClick={()=>{
                        history.push(`/projects/${item.id}`);
                    }}>
                        <div className="imageContainer">
                            <img src={item.url} alt={item.title} />
                        </div>
                        <p className="imageTitle">
                            {item.title}
                        </p>
                    </div>
                ))
            }
            
            </div>
            <div className='viewAll' onClick={()=>{
                setLength(projects.length)
            }}><button className='viewAllBtn'>View All</button></div>
        </div>
    )
}

export default Pojects
