
import React,{useState} from "react"
import { BrowserRouter as Router, Routes, Route, Link ,Switch} from "react-router-dom";
import {useNavigate } from  'react-router-dom'
import './login.css';


export default function Login()

{
    const [username,setName]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
    const handleLogin=()=>
    {
let items =JSON.parse(localStorage.getItem('data'));
console.log(items);
let user = items.name;
let pw= items.password;

if(username ==user && password==pw)
{

navigate('/api')
    }
    else
    alert('Enter valid data')
 


    }

    
    return(

        <div className='container1'>
            
            <h2><center>Login!!!</center></h2><br/><br/>

            <label>User name </label><br/>
            <input type='text' name='Username' value={username} 
            onChange={e=>setName(e.target.value)}  required/><br/><br/>

            <label>Password </label> <br/> 
            <input type='password' name='password' value={password}     
            onChange={e=>setPassword(e.target.value)}  required/> <br/><br/> 

            <button type='submit' onClick={handleLogin} name='button' className='buttonlogin'>Login</button> 
            New User ? <Link to='/Reg' >
                <button type ='button' name ='button' className='buttonclick' >Click</button>
            </Link>
        </div>

    )
}