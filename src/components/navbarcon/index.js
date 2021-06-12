import React, { useState } from 'react'
import './navbarcon.css'
import styled from 'styled-components';


const  Nav = styled.div`
        margin: 0;
        >.nav-tag{
        
        

        @media screen and (max-width: 880px){
            display: ${({ show }) => show ? 'block' : 'none'};
                padding-left: 20px;
            }
        }

`;

function Navbarcon({ show }) {
    return (
        <Nav show={show}>
            <div className="nav-tag">
                    <details>
                        <summary><a href="#">HOME</a></summary>
                    </details>
                    <details>
                        <summary>SERVICE [+]</summary>
                        <ul>
                            <li><a href="#">Services Overview</a></li>
                            <li><a href="#">Automation</a></li>
                            <li><a href="#">Coatings</a></li>
                            <li><a href="#">Construction</a></li>
                            <li><a href="#">DanosPetrofac</a></li>
                            <li><a href="#">Fabrication</a></li>
                            <li><a href="#">Instrumentation & Electrical</a></li>
                            <li><a href="#">Intelligent Integrated Materials Solutions</a></li>
                            <li><a href="#">Mechanical Maintenance</a></li>
                            <li><a href="#">Production Workforce</a></li>
                            <li><a href="#">Project Management</a></li>
                            <li><a href="#">Regulatory Compliance</a></li>
                            <li><a href="#">Scaffolding</a></li>
                            <li><a href="#">Shorebase and Logistics</a></li>
                            <li><a href="#">Specialized Consultants</a></li>
                            <li><a href="#">Valve Wellhead</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>CAREERS [+]</summary>
                        <ul>
                            <li><a href="#">APPLY NOW</a></li>
                            <li><a href="#">Careers Overview</a></li>
                            <li><a href="#">Why work for Danos?</a></li>
                            <li><a href="#">Training</a></li>
                            <li><a href="#">Intern Program</a></li>
                            <li><a href="#">International workers</a></li>
                            <li><a href="#">Diversity at Danos</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>RESPONSIBILITY [+]</summary>
                        <ul>
                            <li><a href="#">Responsibility Overview</a></li>
                            <li><a href="#">HSE</a></li>
                            <li><a href="#">Quality Assurance</a></li>
                            <li><a href="#">Regulatory Compliance</a></li>
                            <li><a href="#">Danos Foundation</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>ABOUT [+]</summary>
                        <ul>
                            <li><a href="#">Company Overview</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Purpose, Values, Vision & Culture</a></li>
                            <li><a href="#">Leadership</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Success Stories</a></li>
                            <li><a href="#">Awards</a></li>
                            <li><a href="#">Photo Galleries</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>CONTACT [+]</summary>
                        <ul>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Lunch and Learns</a></li>
                            <li><a href="#">Media Relations</a></li>
                            <li><a href="#">HR Reporting</a></li>
                        </ul>
                    </details>
                </div>
        </Nav>
    )
}

export default Navbarcon
