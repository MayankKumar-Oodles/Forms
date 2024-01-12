import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Orderpage from "./components/Orderpage";
import Nomatch from "./components/Nomatch";
import Products from "./components/Products";
import FeatureProduct from "./components/FeatureProduct";
import NewProduct from "./components/NewProduct";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Orderpage />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeatureProduct/>}/>
          <Route path="feature" element={<FeatureProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;
