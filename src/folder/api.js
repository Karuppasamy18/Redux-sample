import React,{useState,useEffect} from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import './card.css';
import './menu.css';

export default function Api()
{
    const [result, SetResult] = useState([]);
  

    useEffect(()=>
    {
        // getdata();
        axios.post("https://hoblist.com/api/movieList",{
                category:"movies",
                language:"kannada",
                genre:"all",
                sort:"voting"
        }).then((res) => {
        console.log(res.data);
        console.log(res);
        const New = res.data;
             const {
                 result
                } = New
            
            SetResult(result);
             console.log(result)
        })
    },[])
//     var arr=result[0]
//     console.log(arr);
// console.log("resultdata",result)
    return(
        
        // <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        // <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
<div>
<ul>
  <li><Link to='/reg'>Home</Link></li>
  {/* <li><a href="#news">News</a></li> */}
  <li><Link to='/cominfo'>Company Info</Link></li>
  {/* <li><a href="#about">Abou</a></li> */}
</ul>

<div class="card"  style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
  <div class="container" className="e-card e-card-horizontal" 
  style={{ width: `400px` }}>


{
    result.map((data)=>
    (
    <>
    <img 
    src={data.poster} alt='new' className='img'/>
    <div className='align'>
    <h1 style={{fontSize:'20px'}}>Title :{data.title}</h1>
    <h1 style={{fontSize:'20px'}}>Genre :{data.genre}</h1>
    <h1 style={{fontSize:'20px'}}>Director :{data.director}</h1>
    <h1 style={{fontSize:'20px'}}>starring :{data.stars}</h1>
    </div><br/><br/>
    </>
    ))  
}
</div>
</div>
</div>
        
    )
}