import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { additemaction } from './action';
import { useDispatch } from 'react-redux';
import './card.css';
import './index.css';


export default function Addcart() {


     const dispatch = useDispatch();


const [value,setValue]=useState([])
const [tprice,setTprice]=useState([])

const [count,setCount]=useState(1)
const [countdec,setCountdec]=useState(1)

const [total,setTotal]=useState(0)
const [minus,setMinus]=useState(0)


useEffect(()=>
{

axios.post('https://thebvkbiryani.org/v2/user/get_category_products.php',{cat_id:1}).
then(res=>
    {
        console.log(res.data.GTS);
        console.log(res.data);  
        var value=res.data.GTS
        setValue(value);
        console.log(value);
  
    })
},[])

function additem(p,price,id) {
    

    let tprice=price
    setTprice(tprice)

    var total=count*tprice

    setTotal(total)
   let inc=count+1
   setCount(inc)
   

 
  
   console.log('tot',total)

}
function removeitem(id,price) 
{

    
    let c=count-1
    if(c>=0)
    {
        var total=c*price
    
        setTotal(total)
        setCount(c)
    }
   

    console.log(c)
    
    console.log(total)
    
}
    return (
        <>
         <div class="card"  style={{ margin: `50px`,
          display: `flex`, flexDirection: ``,
           justifyContent: `` }}>

  <div class="container" className="e-card e-card-horizontal" 
  style={{ width: `400px` }}>
       <div className='items'>

<h1> Total price :{total}</h1>

<Link to ='/card'>
<input type='button' value='move'></input></Link> 


   
   </div>     
{
            value.map(val=>
                (
                    <>
                     
                   <h1>{val.product_name}  <br/> <br/>
                   <img src={val.product_image} className='img'/>     
                   {
                       val.product_price.map(p=>
                        (
                            <>
                            <h2> Price ${p.product_price}</h2>
                            <input type='Button' value='Add'  onClick={()=>dispatch(
                                additemaction(p
                                    ))}
    
                                style={{background:'blue',width:'350px'}}/> 

                                <input type='Button' value='Remove'  onClick={()=>removeitem(
                                p,p.product_price)} 
                                style={{background:'red',width:'350px'}}/> 
      
                        </>
                        
                        ))
                        
                   }
                   
                 
                  {}</h1>                  
                   <br/><br/>
    

                    </>

                ))
                


        } 
                
        
  </div>
        
 </div>
        </>
    )
}


