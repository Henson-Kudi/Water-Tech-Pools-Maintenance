import React from 'react'
import {useHistory} from 'react-router'
import { Link } from 'react-router-dom'
import './GridItem.css'

function GridItem({title, logo, route}) {
    const history = useHistory()
    return (
        <div className="gridItem" >
                <Link to={`/projects/${route}`}>
                    <img src={logo} alt="project image" />
                <p className="gridItemTitle">
                    {title}
                </p>
                </Link>
        </div>
    )
}

export default GridItem
