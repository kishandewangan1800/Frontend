import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },

    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }

]

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null)
    const active = headerNav.findIndex(e => e.path===pathname);


    return (
        <div ref={headerRef} className='header'>
            <div className="header-wrap container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link to='/'>MOVIEFLIX</Link>
                </div>
                <ul className="header-nav">
                    {
                        headerNav.map((e,i)=>(
                            <li key={i} className={`${i===active?'active':''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header