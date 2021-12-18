import React,{useState,useEffect} from "react"
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { getdataaction } from "./action";


export default function Getdata()
 {

   const dispatch = useDispatch();
const resultdata=useSelector((state)=>state.user.users)
console.log(resultdata);

useEffect(()=>
{
  dispatch(getdataaction());
},[dispatch])

  return(
<>
<h1>hi</h1>



</>        

      

  )

}



 




























//   const [product,setProduct]=useState();
  //   const [prod_price,setPrice]=useState();
  
  // async function handleSubmit() {


  //   let f = new FormData()

  //   f.append('product',product)
  //   f.append('prod_price',prod_price)

  
  //   console.log(f);

    
  // axios.post('https://thebvkbiryani.org/v2/user/get_category_products.php',{cat_id:1},f).
  // then(res=>
  //   {
  //     console.log(res.status)
  //     console.log(res.data)
  //   }
  //     )
  // }
    

    // function handleSubmit ()
    // {
        
    //     // axios.post("https://thebvkbiryani.org/v2/user/get_category_products.php",{
    //     //        cat_id:1
    //     // }).then((res) => {
    //     // console.log(res.data.GTS);
    //     // console.log(res.data);
    //     // console.log(res.data.GTS[0].product_price);
    //     // const result = res.data.GTS;
            
            
    //     //     SetResult(result);
    //     //      console.log(result)
    //     }
    // }

    
