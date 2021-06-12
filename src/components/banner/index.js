import React from 'react'
import './banner.css'
import img from '../../images/construction-company.jpg'
import "bootstrap/dist/css/bootstrap.min.css"

function Banner() {
    return (
        <>
          <div className="image-con">
                <div className="inner-banner">
                    <img src={img} alt="Image" />
                </div>
            </div>  
        </>
    )
}

export default Banner
