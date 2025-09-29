import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
    return (
        <>
        <nav className='navbar bg-red navbar-expand-md fixed-top'>
            <div className='container-fluid'>
                <a href="" className='navbar-brand'>
                <img src="https://img.freepik.com/free-vector/kargil-vijay-diwas-celebration-background-salute-indian-army_1017-45181.jpg?t=st=1757341955~exp=1757345555~hmac=89c5f9fde13664d463d2f3b66d3acb2aecaf719af1aca118168bd9d22908e95b&w=1480" alt="" className='weblog'/>
                </a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target="#a">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="navbar-collapse collapse" id='a'>
                        <ul className="navbar-nav ms-auto text-center">
                        <li><Link to='/' className="nav-link" style={{fontWeight: 'lighter', fontSize: '15'}}>Home</Link></li>
                        <li><Link to='/aircraft' className='nav-link' style={{fontWeight: 'lighter', fontSize: '15'}}>Aircraft</Link></li>
                        <li><Link to='/drone' className='nav-link' style={{fontWeight: 'lighter', fontSize: '15'}}>Drone</Link></li>
                        <li><Link to='/helicopter' className='nav-link' style={{fontWeight: 'lighter', fontSize: '15'}}>Helicopter</Link></li>
                        <li><Link to='/air defence' className='nav-link' style={{fontWeight: 'lighter', fontSize: '15'}}>Air Defence</Link></li>
                        <li><Link to='/rifle' className='nav-link' style={{fontWeight: 'lighter', fontSize: '15'}}>Rifle</Link></li>
                        </ul>
                </div>
            </div>
        </nav>

        
        </>
    )
}

export default Header
