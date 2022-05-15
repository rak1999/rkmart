import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Product = ({data,addItem,setAddItem,setDetail,setProductId}) => {

  return (
    <>
    {data.map(item=>(
      <div id="product">
      <div
        className="card"
        style={{ width: "350px", backgroundColor: "black" }}
      >
        <img
          src={item.image}
          className="card-img-top"
          alt="Product"
          style={{ width: "348px", height: "300px" }}
          onClick={() => {
            setDetail(false);
            setProductId(item.id);
          }}
        />
        <div className="product-card-body">
          <h5 className="card-title text-white">
            {item.title.substr(0,20)+"..."}
          </h5>
          <div id="product-card-content">
            <p className="card-text">{`$ ${item.price}`}</p>
            <p onClick={() => setAddItem(addItem + 1)}>
              <IoAddCircleOutline size="40px" />
            </p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default Product;
