import React from 'react'
import locLogo from '/loc.png'
import hamburger from '/burger.png'
function Header() {
    return (
        <nav>
            <ul>
                <li class="logo">
                    WeBarelyWork
                </li>
                <li>
                    <img src={locLogo} class="icon" alt="location" />
                </li>
                <li id='burger-icon'><img src={hamburger} className="icon"  alt="hamburger icon" /></li>
            </ul>
        </nav>  
    )
}

export default Header