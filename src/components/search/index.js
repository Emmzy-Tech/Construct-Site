import React from 'react'
import './search.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css"
import quote from '../../images/quote-i.png'

function search() {
    return (
        <>
            <div className="search-bar">
                    <div className="con-link">
                        <a href="#">CONTACT</a>
                        <img src={quote} alt="" />
                        <a href="#">LOG IN</a>
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="search here...." />
                        <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                    </div>
                </div>
        </>
    )
}

export default search
