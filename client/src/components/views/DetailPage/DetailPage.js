/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
import './Detail.css'
import { CSSTransition } from 'react-transition-group'
import { connect, useDispatch, useSelector } from "react-redux";

let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`

function DetailPage(props) {
  
 let state = useSelector((state)=>{return state})
 let dispatch = useDispatch();
  
  useEffect(()=>{
    let timer = setTimeout(() => {setAlert(false)}, 2000);
    return ()=>{clearTimeout(timer)}
  },[])
  
  let {id} = useParams();
  let history = useHistory();
  let [Alert,setAlert] = useState(true);
  let [selectTab,setSelectTab] = useState(0);
  let [onOff, setOnOff] = useState(false);
  let [Quantity, setQuantity] = useState(0);

  const quantityChangeHandler = (event) => {
    if(event.target.value<=props.shoes[id].stock){
    setQuantity(event.target.value)
    }else{
      alert('재고 수량 이상은 주문 할 수 없습니다.')
      setQuantity(0)
      event.target.value=''
    }
  }
    
    return (
        <div className="container">
            <Title color={"red"}>Detail</Title>

            {
              Alert===true && props.shoes[id].stock<=10
              ?<div className="my-alert">
              <p>재고가 얼마 남지 않았습니다.</p>
              </div>            
              :null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
                </div>
            <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>가격 : {props.shoes[id].price.toLocaleString()}원</p>
            <p>수량 : <input type="number" pattern="\d*" onChange={quantityChangeHandler} />개</p>
            <p>재고 : {props.shoes[id].stock}개</p>
            
            <button className="btn btn-outline-primary">주문하기</button>
            &nbsp;
            <button className="btn btn-outline-primary" onClick={()=>{ 
              dispatch({type : 'productToCart', payload : {id : props.shoes[id].id, title : props.shoes[id].title ,price : props.shoes[id].price , quan : Quantity} })
              history.push('/cart')
              }}>장바구니</button>
              &nbsp;
            <button className="btn btn-outline-danger" onClick={() => { history.goBack()}}> 뒤로가기 </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
              <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{setOnOff(false); setSelectTab(0)}}>상품상세</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{setOnOff(false); setSelectTab(1)}}>상품평</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{setOnOff(false); setSelectTab(2)}}>상품문의</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={()=>{setOnOff(false); setSelectTab(3)}}>배송/교환/반품</Nav.Link>
              </Nav.Item>
            </Nav>
            
            <CSSTransition in={onOff} classNames="tab" timeout={500}>
              <TabContent selectTab={selectTab} setOnOff={setOnOff}/>
            </CSSTransition>

    </div>
  );
}

function TabContent(props){

  useEffect(()=>{
    props.setOnOff(true) 
  });

  if(props.selectTab===0){
    return <div className="mt-5">상품상세 탭입니다.</div>
  } else if(props.selectTab===1){
    return <div className="mt-5">상품평 탭입니다.</div>
  } else if(props.selectTab===2){
    return <div className="mt-5">상품문의 탭입니다.</div>
  } else if(props.selectTab===3){
    return <div className="mt-5">배송/교환/반품 탭입니다.</div>
  }

}


export default DetailPage
