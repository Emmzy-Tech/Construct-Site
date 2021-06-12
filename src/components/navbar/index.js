import React from 'react'
import './navbar.css'
import logo from '../../images/logo.png'
import Hamburger from '../hamburger'
import styled from 'styled-components';
import Navbarcon from '../navbarcon';



function Navbar() {
    return (
        <>
            <div className="left-side">
                <div className="logo-burg">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    
                    <Hamburger />
                </div>
                <Navbarcon />
            </div>
        </>
    )
}

export default Navbar
