import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import UserDetail from "./pages/UserDetail";

import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";

import Products from "./pages/Products";

import Home from "./pages/Home";
import Footer from "./components/Footer";



import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/" component={Home} />
        
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/users/:id" component={UserDetail} />
         

         <Route exact path="/users" component={Users} />
         <Route exact path="/orders" component={Orders} />
         <Route exact path="/products" component={Products} />
         <Route exact path="/checkout" component={Checkout} />
         <Route exact path="/thankyou" component={Thankyou} />
         

      
      
      




        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
   
  </Router>
);

export default App;
