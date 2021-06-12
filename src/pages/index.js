import * as React from "react"
import '../components/global.css'
import { Link } from "gatsby"
import background from '../images/home_back.jpg'
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <div class="wrapper" style={{ backgroundImage: `url(${background})` }}>
            <Layout />
    </div>

  </>
)

export default IndexPage
