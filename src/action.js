import axios from 'axios'

export const getdataaction=()=>async dispatch=>

 {
    const result = await axios.post("https://thebvkbiryani.org/v2/user/get_category_products.php",{cat_id:1});
 
 
 dispatch({
     type:"getitems",
     payload:result.data.GTS
 })   

 }
 export const additemaction=(p)=>dispatch=>
 {
dispatch(
    {   
            type :'ADDITEM',
            payload:{price:p.product_price,id:p.product_price_id,count:1}
    }
)
   
};
 
    

  
