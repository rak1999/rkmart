import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import Product from "./Product";

const ProductList = (props) => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(true);
  const [productId, setProductId] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const resData = await res.json();
      setData(resData);
    };
    getData();
  }, [data, page]);

  return (
    <div id="productlist">
      {detail
        ? data.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
              addItem={props.addItem}
              setAddItem={props.setAddItem}
              setDetail={setDetail}
              setProductId={setProductId}
            />
          ))
        : data
            .filter((item) => {
              if (item.id === productId) {
                return item;
              }
            })
            .map((item) => (
              <Detail
                id={item.id}
                image={item.image}
                name={item.title}
                description={item.description}
                price={item.price}
                setDetail={setDetail}
              />
            ))}
    </div>
  );
};

export default ProductList;
