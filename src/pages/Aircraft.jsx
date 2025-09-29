import React from 'react'

function Aircraft() {
    return (
        <>
            <div className='container-fluid ccc'>
                <div className='row'>
                    <div className='col-md-2'> </div>
                    <div className='col-md-8 text-white' style={{ paddingTop: '140px' }}>
                        <h1 className='text-center s'>Fighter plane</h1>
                    </div>
                    <div className='col-md-2'></div>
            </div>
            </div>
            <br />
            <br />
            <div className='container'>
                <h2 className='text-center text-blue z'>amca</h2>
                <br />
                <div className='row'>
                    <div className='col-md-5 text-center aos-init aos-animate' data-aos='flip-left' data-aos-delay='400' data-aos-duration='1000'>
                        <img src="https://eurasiantimes.com/wp-content/uploads/2022/03/amca.jpeg" className='f' alt='' />
                    </div>
                    <div className='col-md-7 text-center aos-init aos-animate' data-aos='flip-right' data-aos-delay='400' data-aos-duration='1000'>
                        <p className='t'>The Advanced Medium Combat Aircraft (AMCA) is a planned Indian single-seat, twin-engine, all-weather fifth-generation stealth, multirole combat aircraft being developed for the Indian Air Force and the Indian Navy. The aircraft is being designed by the Aeronautical Development Agency, an aircraft design agency under the Ministry of Defence. Mass production of the aircraft is planned to start by 2035.

                            The AMCA is intended to perform a multitude of missions including air supremacy, ground-strike, suppression of enemy air defenses, and electronic warfare missions. It is intended to supplant the Sukhoi Su-30MKI air superiority fighter, which forms the backbone of the IAF fighter fleet. The AMCA design is optimized for low radar cross section and supercruise capability.</p>
                        <h1 className='z'>Armament</h1>
                        <ul>
                            <li>
                                <b>GUNS:</b>
                                23 mm GSh-23 cannon
                            </li>
                            <li>
                                <b>Hardpoints: </b>
                                14(internal + external) with a capacity of around 7 tons (expected), with provisions to carry combinations of:
                            </li>
                            <li>
                                <b>Missiles: </b>
                                Air to air missiles:-Astra IR,Astra Mark 1,Astra Mark 2,Astra Mark 3,NG-CCM
                                <br />
                                Air to ground missiles:-BrahMos NG,Rudram
                            </li>
                            <li>
                                <b>Bombs: </b>
                                Laser-guided bomb:-NG-LGB
                                <br />
                                Precision-guided munition:-HSLD-100/250/450/500,Smart Anti-Airfield Weapon,Smart Anti-Airfield Weapon
                            </li>
                            <li>
                                <b>Avionics: </b>
                                A larger variant of LRDE Uttam AESA Radar
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container'>
                <h2 className='text-center text-blue z'>tejas mk2</h2>
                <br />
                <div className='row'>
                    <div className='col-md-5 text-center aos-init aos-animate' data-aos='flip-left' data-aos-delay='400' data-aos-duration='1000'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tejas_MKII.jpg/1920px-Tejas_MKII.jpg" className='f' alt='' />
                    </div>
                    <div className='col-md-7 text-center aos-init aos-animate' data-aos='flip-right' data-aos-delay='400' data-aos-duration='1000'>
                        <p className='t'>The HAL Tejas Mark 2'Medium Weight Fighter' (MWF), is an Indian 4.5 generation, single-engine, canard delta wing, multirole combat aircraft designed by the Aeronautical Development Agency in collaboration with Aircraft Research and Design Centre (ARDC) of Hindustan Aeronautics Limited for the Indian Air Force. It is a further development of the HAL Tejas, with an elongated airframe, close coupled canards, new sensors, and a more powerful engine. The roll-out of the first prototype is expected by 2025, first flight within 2026 and mass production by 2029. As of June 2025, 60% of prototype development has been completed.

                            The fighter is being designed and developed to replace multiple strike fighters of IAF viz, the SEPECAT Jaguar, Dassault Mirage 2000, and Mikoyan MiG-29. The indigenous content of the fighter will be 82% initially and will cross 90% after the licensed production of its engine</p>
                        <h1 className='z'>Armament</h1>
                        <ul>
                            <li>
                                <b>GUNS:</b>
                                1 × 30 millimetres (1.2 in) GSh-30-1
                            </li>
                            <li>
                                <b>Hardpoints: </b>
                                13 hardpoints with a capacity of around 6.5 tonnes (expected),[75] with provisions to carry combinations of
                            </li>
                            <li>
                                <b>Missiles: </b>
                                Air to air missiles:-MICA (planned), ASRAAM, Meteor (planned), Astra, NG-CCM (planned)
                                <br />
                                Air to ground missiles:-BrahMos-NG ALCM, LR-ALCM (planned), Rudram 2/3 (planned), SCALP-EG (planned), Crystal Maze
                                <br />
                                Anti-radiation missile:-Rudram 1/2
                            </li>
                            <li>
                                <b>Bombs: </b>
                                Laser-guided bomb:-Sudarshan
                                <br />
                                Precision-guided munition:-Spice, HSLD-100/250/450/500, DRDO Glide Bombs, Smart Anti-Airfield Weapon
                                <br />
                                Cluster munition
                                <br />
                                Loitering munition:-CATS ALFA
                                <br />
                                Unguided bomb
                            </li>
                            <li>
                                <b>Avionics: </b>
                                LRDE Uttam AESA Radar, CASDIC  Unified Electronic Warfare Suite (UEWS), CASDIC Dual Colour Missile Approach Warning System (DCMAWS), CASDIC Targeting pod
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aircraft
