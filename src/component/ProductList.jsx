import React, { useEffect, useState } from 'react';
import Detail from './Detail';
import Product from './Product';

const ProductList = (props) => {
    const [data , setData] = useState([]);
    const [detail , setDetail] = useState(true);
    useEffect(()=>{
        const getData = async () => {
            const res = await fetch("http://api.products.luezoid.com/products?page=1#",{
                method : "get",
                headers : {
                    Authorization : "Bearer " + "ULxG9gG98KDGPql/BFI/woCN9T8="
                }
            })

            const resData = await res.json();
            setData(resData.data.items);
        }
        getData();
    },[data])
  return (
       
    <div id='productlist'>
        { detail ?
           data.map(item=>
                <Product
                    image={item.bannerImage.url} 
                    name={item.subCategory.name}
                    price={item.price}
                    addItem = {props.addItem}
                    setAddItem = {props.setAddItem}
                    setDetail = {setDetail}
                /> 
            ) : 
            data.map(item=><Detail 
                image={item.bannerImage.url} 
                name={item.subCategory.name} 
                description={item.description}
                price={item.price} 
                />)
        }

    </div>
  )
}

export default ProductList;