import React, {useState} from 'react'
import './hamburger.css'
import styled from 'styled-components';

const  Nav = styled.div`
        background-color: ${({ show }) => show ? 'red' : 'blue'};

`;

function Hamburger() {
    const [show, setShow] = useState(false)
    return (
        <>
        <Nav show={show} onClick={() => setShow(!show)}>
            <div className="hamburg">
                <div className="bug">
                    <span className="burg"></span>
                    <span className="burg"></span>
                    <span className="burg"></span>
                </div>

            </div>
        </Nav>
        </>
    )
}

export default Hamburger
