import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap'
import '../../../App.css'

function CartPage(props) {

  let [DiscountAlert, setDiscountAlert] = useState(true);

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr> 
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {
            props.state.map((data,i)=>{
              return (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.quan}</td>
              <td>
                <Button variant="outline-primary" onClick={()=>{ props.dispatch({ type : 'increaseQuan' }) }}>+</Button>
                <Button variant="outline-primary" onClick={()=>{ props.dispatch({ type : 'decreaseQuan' }) }}>-</Button>  
              </td>
              
            </tr>
                )
              })
            }
          </tbody>
        </Table>

        {
          DiscountAlert === true
          ? <Modal setDiscountAlert={setDiscountAlert}/>
          : null
        }
        
        
        
      </div>
    );
}

function mapStateToProps(state){
    return {
        state
    }
}

function Modal(props){
  return (
          <div className='my-alert'>
            <p>지금 구매하면 20% 할인 쿠폰 발급</p>
            <Button variant="outline-danger" onClick={()=>{props.setDiscountAlert(false)}}>닫기</Button>
          </div>
  )
}

export default connect(mapStateToProps)(CartPage)
