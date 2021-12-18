const initialstate=[{
    
    d:[]
}]


export const sharedatareducers=(state=initialstate,action)=>
{
    
    switch (action.type) {
        
        case 'ADDITEM':
            
            
            
           return{
            
            ...state,
            
           }
           
    
        default:
            return{

                 state:'no data'
            }
           
    }
}
