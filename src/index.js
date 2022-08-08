import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//REDUX
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Reducers';
//SAGA
import createSagaMiddleware from 'redux-saga';
import allSaga from "./sagas";





const sagaMiddleware = createSagaMiddleware();

const state = createStore( allReducers, applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(allSaga);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={state}>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
