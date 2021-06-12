import React from 'react'
import './career.css'
import img2 from '../../images/img2.jpg'

function career() {
    return (
        <>
            <div className="slide career">
                        <div className="box about-work">
                            <img src={img2} alt="" />
                        </div>
                        <h4>LEARN MORE ABOUT OUR CURRENT CAREER OPPORTUNITIES.</h4>
                        <a href="#" className="down-link">CAREERS</a>
                    </div>
        </>
    )
}

export default career
