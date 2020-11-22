import React, { Component } from "react";
import "./index.css";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";


const App = () => {
  return (


    <div className="container ">
<div className="row">
          <div className="col-md-12">
            <h1>projet fin de formation</h1>
          </div>
        </div>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/products">Menu</Link>
          <Link to="/cart">Cart</Link>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/cart" component={Cart} />

        
        
        

        <footer>
          <small>
            made by{" "}
            <a href="https://www.facebook.com/hacker09.223">majed bejaoui</a>,
            source code available on <a href="">github</a>
          </small>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
