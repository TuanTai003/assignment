import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import products from "./DB/AppleProduct.json";
import "./App.css";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="product-list">
          {productList.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
