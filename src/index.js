import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import Data from './Data/Data.js'


let defaultState = Data;

function reducer(state = defaultState, action){
  if ( action.type === 'increaseQuan'){
    let copy=[...state]
    if(copy[0].quan<copy[0].stock){
      copy[0].quan++
      return copy
    } else {
      alert('주문 수량이 재고 수량을 초과할 수 없습니다.')
      return state
    }
    
  } else if( action.type === 'decreaseQuan') {
    let copy=[...state]
    if(copy[0].quan>0){
    copy[0].quan--
    return copy
  } else {
    alert('수량은 1 이상이여야 합니다.')
    return state
  }  
  } else {
    return state
  }
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
