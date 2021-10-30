/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function MainPage(props) {
  let [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="jumbotron">
        <br />
        <br />
        <h1>Hello, world!</h1>
        <h4>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </h4>
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {props.shoes.map((data, i) => {
            return <Card shoes={data} i={i} />;
          })}
        </div>
      </div>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setLoading(true);
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              console.log(result.data);
              props.setShoes([...props.shoes, ...result.data]);
              setLoading(false);
            })
            .catch(() => {
              console.log("로딩 실패");
            });
        }}
      >
        더보기
      </button>
      {loading === true ? <LoadingAlert /> : null}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={"/detail/" + props.i}>
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
      </Link>
      <p>{props.shoes.content}</p>
    </div>
  );
}

function LoadingAlert(props) {
  return (
    <div className="my-alert">
      <p>로딩중입니다.</p>
    </div>
  );
}

export default MainPage;
