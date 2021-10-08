import React from 'react'
import './Services.css'
import architectureAndEngineering from './images/architectureAndEngineering.jpg'
import construction from './images/construction.jpg'
import interiorAndExteriorDesign from './images/interiorAndExteriorDesign.jpg'
import projectDesign from './images/projectDesign.jpg'

function Services() {
    return (
        <div>
            <div className="servicesHeaderContainer">
                <div className="servicesHeader">
                    <h1>Always at your service</h1>
                    <p>
                        From project exploration to design concepts to finishing touches, we handle every aspect of the pool renovation or pool construction process. With everything under one roof, we set an extremely high bar for quality and efficiency.
                    </p>
                </div>
            </div>
            <div className="servicesContainer">
                <div className="serviceGridItem">
                    <div className="serviceImageContainer">
                        <img src={projectDesign} alt="Service Image" />
                    </div>
                    <div className="serviceText">
                        <h2>Custom design + build</h2>
                        <p>
                            From the beginning, we listen, brainstorm, and discuss ideas to bring out the full potential of spaces and areas that are important to you. This step informs and educates you on what project ideas are possible and what budget you will need to complete them.
                        </p>
                    </div>
                </div>

                <div className="serviceGridItem">
                    <div className="serviceImageContainer">
                        <img src={architectureAndEngineering} alt="Service Image" />
                    </div>
                    <div className="serviceText">
                        <h2>Architecture + engineering</h2>
                        <p>
                            From ideas to drawn plans, we present the project in printed form with the help of our architect. Once the final draft is representative of your goals, we move on to engineering. And if building permit applications are required, we'll take care of them for you.
                        </p>
                    </div>
                </div>

                <div className="serviceGridItem">
                    <div className="serviceImageContainer">
                        <img src={interiorAndExteriorDesign} alt="Service Image" />
                    </div>
                    <div className="serviceText">
                        <h2>Interior + exterior design</h2>
                        <p>
                            This final stage is all about attention to detail. Our designer will walk you through finishing selections, color coordination, window design, flooring, trim, and much much more. It's easy to feel overwhelmed, but we're here to help make it stress free and fun.
                        </p>
                    </div>
                </div>

                <div className="serviceGridItem">
                    <div className="serviceImageContainer">
                        <img src={construction} alt="Service Image" />
                    </div>
                    <div className="serviceText">
                        <h2>Project implementation</h2>
                        <p>
                            Once you give the green light on all the planning and design decisions, we're ready to start building. We supply and operate all trades, materials and supplies, as well as site operations. Our goal is always to keep the project on time and on budget.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
