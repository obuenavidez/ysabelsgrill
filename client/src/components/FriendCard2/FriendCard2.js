import React from "react";
import "./FriendCard2.css";

import { Link } from "react-router-dom";
import { FormBtnInfo } from "../../components/Form";
import { FormBtn } from "../../components/Form";
 


const FriendCard2 = props => (

  


  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    
      <ul>
        <li>
          
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
        
      </ul>
      <div className="content">
      <Link to="/projects">  
           <FormBtnInfo>
               View Code
          </FormBtnInfo>
          <FormBtn>
               View Demo
          </FormBtn>
      </Link>    
          
    </div>
    </div>
    
    
  </div>
);

export default FriendCard2;
