/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Data from "../../../Data/Data";
import styled from 'styled-components'
import './Detail.css'

let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`

function DetailPage() {
  
    let {id} = useParams();
    let history = useHistory();
    let [alert,setAlert] = useState(true);
    let [input,setInput]  = useState('');


    useEffect(()=>{
      let timer = setTimeout(() => {setAlert(false)}, 2000);
      return ()=>{clearTimeout(timer)}
    },[])
    
    return (
        <div className="container">
            <Title color={"red"}>Detail</Title>
            {input}
            <input onChange={(e)=>{setInput(e.target.value)}} />

            {
              alert===true
              ?<div className="my-alert">
              <p>재고가 얼마 남지 않았습니다.</p>
              </div>            
              :null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
            <div className="col-md-6 mt-4">
            <h4 className="pt-5">{Data[id].title}</h4>
            <p>{Data[id].content}</p>
            <p>{Data[id].price}</p>
            <button className="btn btn-outline-primary">주문하기</button>
            <button className="btn btn-outline-danger" onClick={() => { history.goBack();}}> 뒤로가기 </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
