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
import Profile from "./components/Profile";
import { useRoutes } from "react-router";
const LazyAbout = React.lazy(()=> import ('./components/About'))
const App = () => {

  const  element=useRoutes([
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'about',
      element: <React.Suspense fallback="loading..."><LazyAbout  /></React.Suspense>,
    },
    {
      path:'profile',
      element:<Profile/>,
    },
    {
      path:'order',
      element:<Orderpage/>,
    },
    {
      path:'*',
      element:<Nomatch/>,
    },
    {
      path:'profile',
      element:<Profile/>,
    },
    {
      path:'users',
      element:<Users/>,
    },
    {
      path:'products',
      element:<Products/>,
      children:[
        {index:true ,element:<FeatureProduct />},
        {path:'feature' ,element:<FeatureProduct />},
        {path:'new',element:<NewProduct />},
      ]
    },
    {
      path:'users',
      element:<Users />,
      children:[
        {path:':userId' ,element:<UserDetails />},
        {path:'admin',element:<Admin />},
      ]
    },

  ])
  return (
    <>
      <Navbar />

      {element}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback="loading..."><LazyAbout  /></React.Suspense>} />
        <Route path="order" element={<Orderpage />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="/profile" element={<Profile/>}/>
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
      </Routes> */}
    </>
  );
};

export default App;
