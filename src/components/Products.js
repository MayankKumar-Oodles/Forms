import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search product" />
      </div>

      <nav>
        <Link to="feature">Feature</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
