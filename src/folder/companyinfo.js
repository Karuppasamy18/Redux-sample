import React from 'react'
import { Link } from 'react-router-dom'
import './info.css';

export default function Companyinfo() {
    
    return (
       
    <center>
        <div className='containerinfo'>

           <h2>Company : Geeksynergy Technology Pvt Ltd</h2>
           <h2 >Address : Sanjay Nagar,Banglore-56</h2>
           <h2 >Phone : ********90</h2>
           <h2 >Email : ZZZ@gmail.com</h2>
    
           <Link to='/api'>Back</Link>
       </div>
       </center>
    )
}


