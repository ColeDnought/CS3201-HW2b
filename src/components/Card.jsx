import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.contact[0].name}</h2>
        <img src={props.contact[0].imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.contact[0].phone}</p>
        <p>{props.contact[0].email}</p>
      </div>
    </div>
  );
}

export default Card;
