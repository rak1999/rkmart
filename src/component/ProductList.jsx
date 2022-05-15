import React, { useEffect, useState} from "react";
import Loading from "./Loading";
import Detail from "./Detail";
import Product from "./Product";
import Pagination from "./Pagination";

const ProductList = (props) => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(true);
  const [productId, setProductId] = useState(null);
  const [ loading , setLoading] = useState(true);
  const [currentPage , setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    };
    getData();
  }, [data]);

  // Get current Post
  const IndexOfLastPage = currentPage * productPerPage;
  const IndexOfFristPage = IndexOfLastPage - productPerPage;
  const currentProducts = data.slice(IndexOfFristPage,IndexOfLastPage);


  // Change Page

  const Paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="productlist">
      { loading ? <Loading /> :
      detail
        ?
        <>
        <Product
              data={currentProducts}
              addItem={props.addItem}
              setAddItem={props.setAddItem}
              setDetail={setDetail}
              setProductId={setProductId}
            />
            <Pagination productPerPage={productPerPage} totalProduct={data.length} Paginate={Paginate} />
            </>
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
