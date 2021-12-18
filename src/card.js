import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getdataaction } from './action';

export default function Card() {



const dispatch=useDispatch();
const result=useSelector((state)=>state.added.d)
console.log(result);


// useEffect(()=>
// {

//     dispatch(getdataaction());
// },[])





    // const[arr,setArr]=usestate([])

//     const dispatch = useDispatch();
// const resultdata=useSelector((state)=>state.user.users)


// useEffect(() => {
    
//    dispatch(getdataaction())
// }, [])
// console.log(resultdata);


    return (
        
        <div>
            
           

        </div>
    )
}
