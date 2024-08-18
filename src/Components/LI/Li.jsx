import React from 'react'
import './Li.css'
// import { Link } from 'react-router-dom'

const Li = () => {
  return (
    <div className="list">
        <ul>
            <li><i class="fa-solid fa-house"><a href=''>Home</a></i></li>
            <li><i class="fa-brands fa-python"> Python</i></li>
            <li><i class="fa-brands fa-java"> Java</i></li>
            <li><i class="fa-brands fa-js"> JavaScript</i></li>
            <li><i class="fa-brands fa-html5"> HTML</i></li>
            <li><i class="fa-solid fa-database"> SQL</i></li>
            <li><i class="fa-brands fa-php"> PHP</i></li>
            <li><i class="fa-solid fa-earth-europe"> c#</i></li>
            <li><i class="fa-solid fa-earth-europe"> c++</i></li>
            <li><i class="fa-brands fa-nfc-symbol"> DS</i></li>
            <li><i class="fa-solid fa-head-side-virus"> APTITUDE</i></li>
            <li><i class="fa-solid fa-head-side-cough"> reasoning</i></li>
            <li><i class="fa-solid fa-square-check"> selenium</i></li> 
            <li><i class="fa-solid fa-database"></i> dbms</li> 
            <li><i class="fa-solid fa-earth-europe"> c</i></li> 
        </ul>
    </div>
  )
}

export default Li