import React from 'react'
import './footer.css'
import linkedin from '../../images/in.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/insta.png'
import twitter from '../../images/twi.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={insta} alt="" />
                </div>
                <div className="footer-link">
                    <a href="#">Home</a>
                    &nbsp; | &nbsp;
                    <a href="#">Services</a>
                    &nbsp; | &nbsp;
                    <a href="#">Careers</a>
                    &nbsp; | &nbsp;
                    <a href="#">Responsibility</a>
                    &nbsp; | &nbsp;
                    <a href="#">About us</a>
                    &nbsp; | &nbsp;
                    <a href="#">Contact</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
