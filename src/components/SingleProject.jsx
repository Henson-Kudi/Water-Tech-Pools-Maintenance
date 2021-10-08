import React, {useState, useEffect,} from 'react'
import { useParams } from 'react-router'
import app from './firebase/index'
import './SingleProject.css'
const db = app.firestore()


function SingleProject() {

const [projects, setProjects] = useState([])
const {projectId} = useParams()

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
            {
                projects?.filter(item => item.id === projectId).map(item => (
                    <div>
                        <div className='projectDetailTop'>
                            <h1 className='projectTitle'>
                                {item.title}
                            </h1>
                            <p className='projectHashtags'>
                                <span>#Renovations</span>
                                <span>#Construction</span>
                                <span>#Repairs</span>
                            </p>
                            
                        </div>
                        <div className="projectDetailBottom">
                            <div className="projectImageContainer">
                                <img src={item.url} alt={item.title} />
                            </div>
                            <p className="projectDescription">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SingleProject
