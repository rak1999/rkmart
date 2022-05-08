import React from "react";

const Detail = (props) => {
  return (
    <div id="detail" style={{ display: "flex" }}>
      <div id="img">
        <img
          src={props.image}
          className="card-img-top"
          alt="Product"
          style={{ width: "600px", height: "400px" }}
          onClick={() => {
            props.setDetail(true);
          }}
        />
      </div>
      <div className="detail-card-body">
        <h1 className="card-title text-black "><strong>Title : </strong>{props.name}</h1>
        <div id="card-content">
          <div className="detail-card-text">
           <strong> Description : </strong>{props.description.substr(0, 200) + "..."}
          </div>
          <p className="card-text"><strong>Price : </strong>{`₹ ${props.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;