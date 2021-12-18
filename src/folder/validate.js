import * as yup from 'yup';

 export const validateform = yup.object().shape({
  
    name :yup.string().required(),
    password : yup.string().min(3).max(8).required(),
    email:yup.string().email().required(),
    
})
