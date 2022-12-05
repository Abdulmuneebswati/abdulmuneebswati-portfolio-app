import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./Navbar.scss";
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='navbar' id='Navbar'>
      <div className="n-left">
        <div className="n-name">Muneeb</div>
        <Toggle/>
      </div>

      {/* //right */}
      <div className="n-right">
        <div className="n-list">
            <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass"><li>Home</li></Link>
            <Link spy={true} to='Services' smooth={true} activeClass="activeClass"><li>Services</li></Link>
            <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass"><li>Portfolio</li></Link>
            <Link spy={true} to='Education' smooth={true} activeClass="activeClass"><li>Education</li></Link>
            <Link spy={true} to='Recommendations' smooth={true} activeClass="activeClass"><li>Recommendations</li></Link>
            </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
        <button className="button n-button">
            Contact me
        </button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar
