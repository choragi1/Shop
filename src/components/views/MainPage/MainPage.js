/*eslint-disable*/
import React, { useState } from "react";
import Data from "../../../Data/Data";
import {Link} from "react-router-dom";

function MainPage() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div>
      <div className="jumbotron">
        <br/><br/>
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
          {shoes.map((data, i) => {
            return <Card shoes={data} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={"/detail/"+(props.i)}>
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

export default MainPage;
