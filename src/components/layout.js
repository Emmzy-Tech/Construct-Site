import React from 'react'
import './layout.css'
import Search from "../components/search"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Help from "../components/help"
import Career from "../components/career"
import Safety from './safety'
import News from './news'
import Footer from './footer'
import Hamburger from './hamburger'

function layout() {
  return (
    <div>
      <div className="grid-container">
        <div className="search">
          <Search />
        </div>
        <div className="side-nav">
          <Navbar />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="help">
          <Help />
        </div>
        <div className="career">
          <Career />
        </div>
        <div className="safety">
          <Safety />
        </div>
        <div className="news">
          <News />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
    </div>
  )
}

export default layout
