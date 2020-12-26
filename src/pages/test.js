import React from 'react'
 import {navigate} from 'gatsby';
 import Header from '../components/header'
const Test = () =>(
    <div>
    <Header title="Test page"></Header>
    <h1>Test page</h1>
    <button onClick={()=>navigate('/')}> Home page </button>
    </div>
)
export default Test;