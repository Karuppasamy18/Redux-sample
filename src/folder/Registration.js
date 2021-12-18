import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,Switch} from "react-router-dom";
import './Registration.css';
import { validateform } from './validate';

export default function Registration ()
{
const [name,setName]=useState('')
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [profession,setProfession]=useState('')


const handleChange=e=>
{
    setProfession(e.target.value);
}

    const handleRegister =async(e)=> {

        e.preventDefault();
        let formdata = {
            
            'name': name,
            'password': password,
            'email': email,
            'phone': phone,
            'profession':profession
        };
        const isValid = await validateform.isValid(formdata);
        console.log(isValid);
        if(isValid===true)
        {
            localStorage.setItem('data',formdata)
            console.log(JSON.stringify(formdata));
            alert("regitered");
        }
        else{
            alert("enter dSata correctly")
        }
       
    }
   
    return(
        <form id ='form'>
        <div className='containerreg'>
        <h2><center>Registration Form</center></h2><br/><br/>
       
        <label>Name:</label><br/>
        <input type='text' name='name' value={name} onChange={e=>setName(e.target.value)} required/><br/><br/>

        <label>Password:</label><br/>
        <input type='password' name='password' value={password} onChange={e=>setPassword(e.target.value)}
         required/><br/><br/>

        <label>Email:</label><br/>
        <input type="text" name='email' value={email} onChange={e=>setEmail(e.target.value)}
         required/><br/><br/>

         <label>Phone number :</label><br/>
          <input type ='text' name='phone' value={phone} onChange={e=>setPhone(e.target.value)} required/><br/><br/>

         Profession : <select value={profession} onChange={handleChange}  name='Profession' 
         required><br/><br/>
             <option value='developer'>Developer</option>
             <option value='designer'>Designer</option>
             <option value='hr'>Hr</option>
             <option value='manager'>Manager</option>
         </select><br/><br/>
    
        <button type ='submit' name='button' className='butt' onClick={(e)=>handleRegister(e)}>Register</button>
        Already Registered ?<Link to='/login'>
            <button type='submit' className='butt1'>Login</button>
        </Link>

        </div>
        
        </form>

    )

    
}
