import React from 'react';
import {IoAddCircleOutline} from "react-icons/io5";

const Product = (props) => {

  return (
    <div id='product'>
        <div className="card" style={{width:"350px" , backgroundColor:"black"}}>
            <img 
              src={props.image} 
              className="card-img-top" 
              alt="Product" 
              style={{width:"348px" , height:"300px"}}
              onClick={()=>{ 
                props.setDetail(false);
              }}
            />
            <div className="card-body">
                <h5 className="card-title text-white">{props.name}</h5>
                <div id='card-content'>
                  <p className="card-text">{`₹ ${props.price}`}</p>
                  <p onClick={()=>props.setAddItem(props.addItem+1)}><IoAddCircleOutline size="40px"/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product;