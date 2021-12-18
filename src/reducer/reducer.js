const  initialstate ={
    users:[]
}

 const getdatareducer=(state=initialstate,action)=>

{

    switch (action.type) {

        case "getitems" :

        return {
            ...state,
            users:action.payload
 
        }
            
          
           default:
            return {
                state : 'no'
            };
    }
}



export default getdatareducer;
