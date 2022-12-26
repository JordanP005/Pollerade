import React from "react";

function Item(props) {
  return (
    <div className="item">
      <img src={props.img} />
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Item;
