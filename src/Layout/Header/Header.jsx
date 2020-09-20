import React from 'react'

import './Header.css'

export default function Header() {
    return (
        <section >
            <div className='navbar'> 
            <div className='logo-container'>
                LOGO
            </div>
            <div className='nav-links'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Work</h3>
                <h3>Contact</h3>
            </div>
            </div>
        </section>
    )
}
