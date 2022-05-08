import React, { useState } from 'react'

import Footer from './component/Footer'
import Header from './component/Header'
import ProductList from './component/ProductList';
import "./App.css";


const App = () => {
  const [addItem , setAddItem] = useState(0);
  
  return (
    <div id='app'>

        <Header addItem={addItem}  />
        <ProductList addItem={addItem} setAddItem={setAddItem}/>
        <Footer />
    </div>
  )
}

export default App
