import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Product = (props) => {
  const { image, price, name } = props;

  return (
    <div id="product">
      <div
        className="card"
        style={{ width: "350px", backgroundColor: "black" }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="Product"
          style={{ width: "348px", height: "300px" }}
          onClick={() => {
            props.setDetail(false);
            props.setProductId(props.id);
          }}
        />
        <div className="product-card-body">
          <h5 className="card-title text-white">
            {name.substr(0,20)+"..."}
          </h5>
          <div id="product-card-content">
            <p className="card-text">{`$ ${price}`}</p>
            <p onClick={() => props.setAddItem(props.addItem + 1)}>
              <IoAddCircleOutline size="40px" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
