import React from 'react'
import './header.css'
import { Link } from 'react-scroll';

const Header = () => {
    

    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <div className='logo'>
                        <img src='src/assets/img/favicon_io/favicon.ico' />
                    </div>
                    <div className='navlinks'>
                        <ul>
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                            <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                            <li><Link to="footer" smooth={true} duration={500}>Socials</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='btn'>
                    <button>Connect</button>
                </div>
            </div>
        </>
    )
}

export default Header