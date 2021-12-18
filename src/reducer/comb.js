import getdatareducer from  './reducer'
import {combineReducers} from 'redux'
import { sharedatareducers } from './sharereducer';


const rootReducer = combineReducers({
  
user:getdatareducer,
added:sharedatareducers

});

export default rootReducer;