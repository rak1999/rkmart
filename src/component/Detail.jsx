import React from 'react'

const Detail = (props) => {
  return (
    <div id='detail' style={{height:"600px"}}>
        <div className="card" style={{width:"350px" , backgroundColor:"black"}}>
            <img 
              src={props.image} 
              className="card-img-top" 
              alt="Product" 
              style={{width:"348px" , height:"300px"}}
            />
            <div className="card-body">
                <h5 className="card-title text-white">{props.name}</h5>
                <div id='card-content'>
                  <div className="card-text">{props.description}</div>
                  <p className="card-text">{`₹ ${props.price}`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail;