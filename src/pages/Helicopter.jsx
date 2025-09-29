import React from 'react'

function Helicopter() {
    return (
        <>
            <div className='container-fluid abc'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-white' style={{ paddingTop: '140px' }}>
                        <h1 className='text-center s'>helicopter</h1>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
            <br />
            <br />
            <div className='container'>
                <h2 className='text-center text-blue z'>imrh</h2>
                <br />
                <div className='row'>
                    <div className='col-md-5 text-center aos-init aos-animate' data-aos='flip-left' data-aos-delay='400' data-aos-duration='1000'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/HAL_Indian_Multi_Role_Helicopter.jpg" className='f' alt='' />
                    </div>
                    <div className='col-md-7 text-center aos-init aos-animate' data-aos='flip-right' data-aos-delay='400' data-aos-duration='1000'>
                        <p className='t'>The Indian Multi Role Helicopter (IMRH) is a medium-lift helicopter currently under development by Hindustan Aeronautics Limited (HAL) for the Indian Armed Forces. It is designed for multiple roles, air assault, air-attack, anti-submarine, anti-surface, military transport and VIP transport roles. IMRH/DBMRH is aimed to replace all the current Mil Mi-17 helicopters across the Indian Armed Forces.[5]

                            The helicopter will also have a parallel naval variant designated Deck-Based Multirole Helicopter (DBMRH).

                            The planned rotorcraft is expected to have a maximum takeoff weight of 13 tonnes with a five bladed main rotor and 4 bladed rotor on tail. The navalised version further will have longer range and higher payload capacity. HAL estimates requirement of over 314 rotorcraft of same class across the Indian Armed Forces to replace existing Mil Mi-17 helicopters in service in India.[5]

                            The scaled model tests of the helicopter have been ongoing as of 2021 while first flight of a full prototype is expected in 2025–26. The introduction into the armed forces thereafter is expected in 2028, after two years of testing. A total of six prototypes are planned for trials before production.</p>
                        <h1 className='z'>Armament</h1>
                        <ul>
                            <li>
                                2x wings with four hardpoints for a maximum payload of 1,600 kg (3,500 lb).
                            </li>
                            <li>
                                Each inboard station and outboard station has a capacity of 500 kg (1,100 lb) and 300 kg (660 lb) respectively.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Helicopter
