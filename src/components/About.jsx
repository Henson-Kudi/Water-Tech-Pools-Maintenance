import React from 'react'
import osmosisSystem from './images/osmosisSystem.png'
import uvSystem from './images/uvSystem.png'
import saltChlorinator from './images/saltChlorinator.png'
import chlorineDisinfection from './images/chlorineDisinfection.png'
import filteration from './images/filteration.png'
import clarifier from './images/clarifier.png'
import treatmentChem from './images/treatmentChem.png'
import filterAndPump from './images/filterAndPump.png'
import chemFeeding from './images/chemFeeding.png'
import heatAndCoolingPump from './images/heatAndCoolingPump.png'
import leisureProducts from './images/leisureProducts.png'
import './About.css'

function About() {
    return (
        <div className='About'>
            <h1 className='introHeading'>Introduction</h1>
            <p className='introPara'>
                Water Tech, is specialist in water treatment & Swimming pools with its positive history of providing Water treatment solution and swimming pools Trading & Services, Equipments installed or service provide by us ,as well as others have a good track record. Our services department employees are Experienced Engineers and Supervisors to carry out the Work in proper manner. We have the latest equipment’s to cater the requirements of our valued clients. Our staffs have undergone extensive training in their job and are ready to handle and sort of installation and maintenance works concerning the followings:-
            </p>
            <div className="aboutServices">
                <h3 className="aboutServicesHeading"><u>Water Treatment</u></h3>
                <dl>
                    <dt><span>1-</span> Water Desalination & Waste Water Treatment</dt>
                    <dd>
                        <p>
                            Reverse osmosis is a separation process that uses pressure to force a solvent through a membrane that retains the solute on one side and allows the pure solvent to pass to the other side. More formally, it is the process of forcing a solvent from a region of high solute concentration through a membrane to a region of low solute concentration by applying a pressure in excess of the osmotic pressure. This is the reverse of the normal osmosis process, which is the natural movement of solvent from an area of low solute concentration, through a membrane, to an area of high solute concentration when no external pressure is applied. The membrane here is semi permeable, meaning it allows the passage of solvent but not of solute. Water Tech is representing Europe manufacturer EEC which possesses over a decade of experience in the field of reverse osmosis & waste Water treatment.
                        </p>
                        <div className="imgContainer">
                            <img src={osmosisSystem} alt="Reverse Osmosis System" />
                        </div>
                    </dd>
                    
                    <dt><span>2-</span> Water Disinfection</dt>
                    <dd>
                        <p>
                            Water Tech is specialist in Water disinfection & sterilization We can provide you different type & process of water disinfection equipment for desalination plant, Waste water, Building, camps swimming pool & other potable water system We possess the capability to propose the suitable process for your system, our available treatment option are
                        </p>
                        <dl>
                            <dt>i. U V System</dt>
                            <dd>
                                <p>
                                    Our range cover Ultra violet system as Water Tech is distributor of UV LIT from Netherlands which is applicable for domestic water use from municipal water, STP, Swimming pool i.e…
                                </p>
                                <div className="imgContainer">
                                    <img src={uvSystem} alt="UV System" />
                                </div>
                            </dd>

                            <dt>ii. Salt Chlorinator</dt>
                            <dd>
                                <p>
                                    Salt Chlorinator systems are based on the process of electro chlorination. These systems are a safer, more reliable and cost effective alternative to the traditional chlorine dosing systems that are largely available in the local market. Salt Chlorinator systems uses only salt, water and electricity to produce sodium hypochlorite needed to disinfect the water. The amount of sodium hypochlorite required is calculated and controlled by a Program Logic Controller (PLC) so as to ensure a tight control and minimal human interaction. The PLC also allows for remote accessibility as well as 24 hour data logging of the system. Salt Chlorinator systems can be sized for commercial as well as small domestic sized pools. They are safe, simple and require minimal space for installation
                                </p>
                                <div className="imgContainer">
                                    <img src={saltChlorinator} alt="Salt Chlorinator" />
                                </div>
                            </dd>

                            <dt>iii. Chlorine disinfection</dt>

                            <dd>
                                <p>
                                    It’s chemical treatment using hypochlorite to kill organism occurs due to fouling within the system, the concentration of chlorine in water for treatment varies depending on each process & objective Water Tech has expertise to do such process of disinfection for building , distribution networks, huge storage Strategically Water tank or long distance water transfer pipes.
                                </p>
                                <div className="imgContainer">
                                    <img src={chlorineDisinfection} alt="Chlorine Disinfection" />
                                </div>
                            </dd>

                        </dl>
                    </dd>

                    <dt><span>3-</span> Water filtration & Softening</dt>
                    <dd>
                        <p>
                            Filter & Softener mainly removes suspended solids, Odour & Hardness from water, which has layers of sand and gravel, Carbon or resin. Our USA products range can keep you satisfying because of high quality & durability.
                        </p>
                        <div className="imgContainer">
                            <img src={filteration} alt="Water filteration system" />
                        </div>
                    </dd>

                    <dt> <span>4- </span> Water Clarifier</dt>
                    <dd>
                        <p>
                            Water tech supply water clarifier for hotels, hospital & commercial filter the advantage of our France manufacturer - Atlantic is special inner coating of tanks for protection against corrosion which means long time using without any damage of Tank.
                        </p>
                        <div className="imgContainer">
                            <img src={clarifier} alt="Water Clarifier" />
                        </div>
                    </dd>

                    <dt><span>5-</span> Water treatment Chemical</dt>
                    <dd>
                        <p>
                            <span>Water Tech can clarify that what are the consequences if no treatment is used?</span>
                            <ul>
                                
                                <li>Corrosion will reduce Equipment life and cause operational problems</li>
                                <li>Scaling will reduce the efficiency of equipment and causes under deposit corrosion</li>
                                <li>Bacteria will cause smell and reduce the efficiency of equipment</li>
                            </ul>
                            <span>Our service area is cooling water, Boiler water, raw water and wastewater, Process water, Potable water & Water reuse.</span>
                        </p>
                        <div className="imgContainer">
                            <img src={treatmentChem} alt="Water treatment chemical" />
                        </div>
                    </dd>
                </dl>

                <h3><u>Swimming Pool & leisure Products</u></h3>
                <dl>
                    <dt><span>6- </span> Swimming pool Equipment & Chemicals</dt>
                    <dd>
                        <ul>
                        <li><b>Water Tech</b> is doing very strong in field of swimming pools industries, we are handling complete jobs in swimming pool including civil & MEP works for both commercial & residential pools</li>
                        <li>Our integrated service range in swimming pool industries covers supply of pool</li>
                        <li>Equipments & GRP pools and also providing pool services</li>
                        <li>
                            <span><b>Water Tech</b> representing and is authorized distributor for biggest name of swimming pool Equipments manufacturer in world such as</span>
                            <ul>
                                <li><b>Fluidra – Spain:</b> European company based in Spain and has regional offices around whole of world, is classified as biggest manufacturer of complete swimming pool products for both residential and commercial pool</li>
                                <li>
                                    <span><b>Fluidra</b> has different specialized companies producing swimming pool Equipments and fitting related to industries.</span>
                                    <ul>
                                        <li><b>Astral –</b> manufacturing of swimming pool Equipments such as Pumps, filtration, dosing system, underwater lights, pool shell Equipments and heating/cooling system etc</li>
                                        <li><b>Cepex –</b> manufacturing all UPVC valve fitting and pipes</li>
                                        <li><b>Idrania -</b> is the new Fluidra brand for water treatment systems.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>
                        <div className="imgContainer">
                            <img src={filterAndPump} alt="Swimming pool Equipment & Chemicals" />
                        </div>
                    </dd>

                    <dt><span>7- </span> Chemical feeding & control</dt>
                    <dd>
                        <p>
                            <b>Cyclpoe Electronique –</b> is French Company producing analysis and control solutions of main measurement parameters for different application:
                        </p>
                        <ul>
                            <li>Drinking water</li>
                            <li>Sanitary hot water</li>
                            <li>Industry</li>
                            <li>CIP - Cleaning place</li>
                            <li>Waste water</li>
                            <li>Swimming pool</li>
                        </ul>
                        <p>
                            <b>The UNIS'EAU</b> range allow reliable measurement of many parameters for water treatment such as.
                        </p>
                        <ul>
                            <li>Peracetic acid</li>
                            <li>Free bromine, BCDMH, DBDMH</li>
                            <li>Active, free, total chlorine</li>
                            <li>Chlorite</li>
                            <li>Chlorine dioxide</li>
                            <li>Dissolved oxygen</li>
                            <li>Ozone</li>
                            <li>Hydrogen peroxide</li>
                            <li>pH</li>
                            <li>Phmb</li>
                            <li>ORP</li>
                            <li>Temperature</li>
                            <li>Conductivity</li>
                            <li>Turbidity</li>
                        </ul>
                        <div className="imgContainer">
                            <img src={chemFeeding} alt="Chemical feeding and control" />
                        </div>
                    </dd>

                    <dt><span>8-</span> LED Light & Heat/Cooling Pump for swimming pool</dt>
                    <dd>
                        <p>
                            Spectravision are leader in manufacturing LED light for under water use, they can provide you LED light with high quality (manufacturing in Belgium) with shelf life 50,000 Hour, it can be replacing Par 56 Bulb for swimming pool. Our range of light & Heat pump can cover a lot of requirement in Middle East in same time our products are trustable.
                        </p>
                        <div className="imgContainer">
                            <img src={heatAndCoolingPump} alt="LED heat and cooling pump" />
                        </div>
                    </dd>

                    <dt><span>9-</span> Leisure Products & Steam Generator</dt>
                    <dd>
                        <p>
                            Water tech leisure products include Gaspo from Austria The sauna that breathes, 100% solid wood Component construction type massive sauna consisting of spruce solid wood glued panels, thickness 42 mm; tongue and groove joints; Soft line finish, all parts polished; computer- controlled high quality work and accuracy of fit. In other side we can supply you steam generator for steam room Vapac from UK
                        </p>
                        <div className="imgContainer">
                            <img src={leisureProducts} alt="Leisure products and steam generator" />
                        </div>
                    </dd>
                </dl>
            </div>

            <div className="statementOfHealth">
                <h3>
                    WATER TECH ELECTRICAL AND MECHANICAL WORKS
                </h3>
                <h3 className='healthPolicy'>
                    STATEMENT OF HEALTH AND SAFETY POLICY
                </h3>
                <p>The policy of the Company has always been to provide for the health and safety to all its</p>
                <p>Employees without caring there position and ranks. The policy also extends to the clients of the Company, their employees, their property and to all other people who may be affected by the Companies activities. It is the declared intention of the Company to meet its Obligations, both legal and moral, to advance high standards in health and safety within the working environment and to take all reasonable and practical steps to achieve these aims.</p>
                <p>The Company through management at all levels, has a responsibility to ensure, as far as is reasonably practicable, the health, safety and prevention of injuries to all employees and other Ensure that work activity risk assessments are produced and put into practice, provide and instigate method statements for higher risk activities.</p>
                <p>Employees are reminded that they have obligations for the safety of others, among the technicians and for property. These obligations can be met only by using the safety equipment’s</p>
            </div>
        </div>
    )
}

export default About
