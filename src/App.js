import React from 'react'
import Getdata from './getdata'
import {Switch,Route,Link} from 'react-router-dom';
import Sam from './sam'
import Addcart from './Addcart'
import Items from './items'
import './index.css'
import './card.css'
import Card from './card'


export default function App() {
  return (
    
    <div class="card"  style={{ margin: `50px`,
    display: `flex`, flexDirection: `row`,
     justifyContent: `` }}>

        <div class="container"    
        className="e-card e-card-horizontal" 
        style={{ width: `400px` }}>
        
      
   
     </div>
   
 

<Switch> 
  <Route exact path='/' component={Addcart}/>    
<Route path="/card" component={Card}/>
</Switch>

</div>
    
  
  )
 
}
