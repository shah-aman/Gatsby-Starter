import React from "react"
import Header from '../components/header'
import {Link} from 'gatsby'
export default ()=>(

  <div>
  <Header title="home page"></Header>
  <h1>This is home page</h1>
  <Link to="/test/">Test page</Link>
  </div>
)
