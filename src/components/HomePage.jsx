import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import './HomePage.css'
import GridItem from './GridItem'
import app from './firebase/index'
const db = app.firestore()

function HomePage() {
    const [projects, setProjects] = useState([])
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
        <div className="homePage">
            <div className="topScreen">
                <h1 className="caption">
                    We create better spaces for you to swim <span style={{color: 'rgba(0, 0, 255, 0.7)'}}>+</span> relax.
                </h1>
                <p className='descriptionText'>
                    For over a decade, we've provided home and pool owners like you with high-end, custom renovations and additions. <br/>
                    Proper maintenance of your pool will ensure safe enjoyment when you’re ready to take a dive. You can rely on us for a crystal clear pool. We <span style={{color: 'rgba(0, 0, 255, 0.7)'}}>construct, clean, maintain and repair...</span> That's what we know best.
                </p>

                <button className="btnPrimary" onClick={()=>{
                    history.push('/projects')
                }}>View Our Works</button>
            </div>

            <div className="gridContainer">
                {
                    projects?.sort((a, b) => b.id - a.id).slice(0, 6).map(item => (
                        <GridItem
                            title={item.title}
                            logo={item.url}
                            route={item.id}
                        />
                    ))
                }
                {/* <GridItem
                    title='Yesss Title goes here'
                    logo={logo1}
                    route='project2'
                />
                <GridItem
                    title='Yesss Title goes here'
                    logo={logo3}
                    route='project3'
                />
                <GridItem
                    title='Yesss Title goes here'
                    logo={logo3}
                    route='project4'
                />
                <GridItem
                    title='Yesss Title goes here'
                    logo={logo}
                    route='project5'
                />
                <GridItem
                    title='Yesss Title goes here'
                    logo={logo1}
                    route='project6'
                /> */}
            </div>
            <div className="objectives">
                <h1>Clear Vision <span style={{color: 'rgba(0, 0, 255, 0.7)'}}>=</span> Results.</h1>
                <p>Our client relationships are built on trust, collaboration, and transparency. With your ideas and our guidance and resources, the possibilities are endless.</p>
            </div>

            <div>
                <div className="howWeWork">
                    <div className="grid-item">
                        <div className="image-container">
                            <img src='https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt="grid image" />
                        </div>
                        <div className="explain">
                            <h3>Plan</h3>
                            <p>First, we'll listen, answer your questions, and advise on the overall project scope and budget.</p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="image-container">
                            <img src='https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="grid image" />
                        </div>
                        <div className="explain">
                            <h3>Design</h3>
                            <p>Then, we'll explore what's possible together, and test our decisions to ensure cost alignment.</p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="image-container">
                            <img src='https://wfdesignbuild.com/img/wfdb_step_build.png' alt="grid image" />
                        </div>
                        <div className="explain">
                            <h3>Construct</h3>
                            <p>Finally, we'll execute the plan, and make sure you're aware of progress every step of the way.</p>
                        </div>
                    </div>
                </div>
                <button className="btnPrimary" onClick={()=>{
                    history.push('/services')
                }}>View Our Services</button>
            </div>
        </div>
    )
}

export default HomePage
