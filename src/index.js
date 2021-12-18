import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Sam from './sam';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import rootReducer from './reducer/comb'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
 import Sam from './sam';



const initialstate={};

const middleware=[thunk];


const store =createStore(
  rootReducer,initialstate,compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const routing=(

  <Router>
      <Provider store={store}> 
    <App/>
    </Provider>
    </Router>
)



ReactDOM.render(
  routing,
  document.getElementById('root')
);
