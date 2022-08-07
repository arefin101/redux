import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Reducers';


const state = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={state}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();






// const increament = () => {
//   return {
//     type: 'INCREAMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREAMENT'
//   }
// }

// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREAMENT':
//       return state+1;
//     case 'DECREAMENT':
//       return state-1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// store.subscribe(()=>console.log(store.getState()));

// store.dispatch(increament());
