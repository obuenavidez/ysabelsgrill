import React from "react";
//import NavMessage from "../../components/NavMessage";
import "./Nav.css";


const Nav = props => (

// const Nav = () => (
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button type="button" className="collapsed navbar-toggle">
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar" /> <span className="icon-bar" />
  //         <span className="icon-bar" />
  //       </button>
  //       <a href="/" className="navbar-brand">
  //         Ysabel's Grill 
  //       </a>

  //       <a href="/orders" className="navbar-brand">
  //         Order Online
  //       </a>

  //       <a href="/users" className="navbar-brand">
  //         Add Customer
  //       </a>
  //       <a href="/products" className="navbar-brand">
  //         Choose Products
  //       </a>
  //     </div>
  //   </div>
  // </nav>
  <nav className="navbar">
    <ul>
      <li className="brand">
        {/* <a href="/">Clicky Game</a> */}

        <a href="/" className="navbar-brand">
          Ysabel's Grill 
       </a>
      </li> 
      <li>

         <a href="/orders" className="navbar-brand">
          About Us
         </a>
      </li>
      <li>

         <a href="/users" className="navbar-brand">
          Add Product
       </a>
      </li>
      <li> 
       <a href="/products" className="navbar-brand">
          Order Online
        </a>
      </li>  

       
      {/* <NavMessage score={props.score} topScore={props.topScore} /> */}
       
    </ul>
  </nav>
);

export default Nav;
