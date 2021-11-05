import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Data from './Data/Data.js'
import { BrowserRouter } from 'react-router-dom';


let defaultState = Data;

function reducer(state = defaultState, action){
    if(action.type==='productToCart'){
      let found = state.findIndex((data)=>{ return data.id === action.payload.id })
      let quan = parseInt(action.payload.quan)
      if(found>=0){
        let copy = [...state];
        console.log(copy[found])
        console.log(quan)
        copy[found].quan += quan
        return copy
      } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy
      }
      
    } else if ( action.type === 'increaseQuan'){
    let copy=[...state]
    if(copy[action.payload].quan<copy[action.payload].stock){
      copy[action.payload].quan++
      return copy
    } else {
      alert('주문 수량이 재고 수량을 초과할 수 없습니다.')
      return state
    }
    
  } else if( action.type === 'decreaseQuan') {
    let copy=[...state]
    if(copy[action.payload].quan>1){
    copy[action.payload].quan--
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
    <BrowserRouter>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
