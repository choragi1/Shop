/* eslint-disable */
import React, {useState} from "react";
import "./UploadProductPage.css";
import { Form, Button } from "react-bootstrap";
import FileUpload from "../utils/FileUpload";

function UploadProductPage() {

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState(0)
    const [Select, setSelect] = useState(1)
    const [Images, setImages] = useState([])
    const Type = [
        { key : 1, value : "의류/잡화"},
        { key : 2, value : "뷰티"},
        { key : 3, value : "출산/유아용품"},
        { key : 4, value : "식품"},
        { key : 5, value : "주방용품"},
        { key : 6, value : "생활용품"},
        { key : 7, value : "홈/인테리어"},
        { key : 8, value : "가전/디지털"},
        { key : 9, value : "스포츠/레저"},
        { key : 10, value : "자동차용품"},
        { key : 11, value : "도서/음반/CD"},
        { key : 12, value : "완구/취미"},
        { key : 13, value : "문구/오피스"},
        { key : 14, value : "반려동물용품"},
        { key : 15, value : "헬스/건강식품"},
        { key : 16, value : "여행/티켓"},
    ]

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value)
    }
    
    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }
    
    const selectChangeHandler = (event) => {
        setSelect(event.target.value)
    }
    


  return (
    <div className="main">
      <div className="title">
        <div className="col-md-9" />
        <h2>상품 업로드</h2>
      </div>

      <Form>
        <FileUpload />

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>구분</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={selectChangeHandler}
          >
            {Type.map((item) => {
              return (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>상품명</Form.Label>
          <Form.Control
            type="text"
            placeholder="상품명"
            onChange={titleChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>설명</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="상품 설명"
            onChange={descriptionChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>가격(원)</Form.Label>
          <Form.Control
            type="text"
            placeholder="가격(원)"
            onChange={priceChangeHandler}
          />
        </Form.Group>
      </Form>

      <Button variant="outline-primary">확인</Button>
    </div>
  );
}

export default UploadProductPage;
