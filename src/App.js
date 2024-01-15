import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Orderpage from "./components/Orderpage";
import Nomatch from "./components/Nomatch";
import Products from "./components/Products";
import FeatureProduct from "./components/FeatureProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
const LazyAbout = React.lazy(()=> import ('./components/About'))
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback="loading..."><LazyAbout  /></React.Suspense>} />
        <Route path="order" element={<Orderpage />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeatureProduct />} />
          <Route path="feature" element={<FeatureProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
