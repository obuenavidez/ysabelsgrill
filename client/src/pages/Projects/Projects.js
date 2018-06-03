import React, { Component } from "react";
import "./projects.css";
//import Nav from "../Nav";
//import Header from "../Header";
import {  Container } from "../../components/Grid";
import { Row, Col } from "../../components/Grid";

//import ClickItem from "../../components/ClickItem";
//import Checkout from "../../components/Checkout";
//import Tax from "../../components/Tax";
//import Footer from "../Footer";
import FriendCard2 from "../../components/FriendCard2";
//import FriendCard from "../../components/FriendCard";
//import Jumbotron from "../../components/Jumbotron";

//import Title from "../../components/Title";

//import { FormBtn } from "../../components/Form";


import data from "../../data.json";

//import { List, ListItem } from "../../components/List";

import { Link } from "react-router-dom";
//import DeleteBtn from "../../components/DeleteBtn";

//import UpBtn from "../../components/UpBtn";
//import DownBtn from "../../components/DownBtn";
//import FriendCard from "../../components/FriendCard/FriendCard";

import Hero from "../../components/Hero";
import { FormBtn } from "../../components/Form";


class Products extends Component {

   
   
  state = {
    data,
    id: "",
    key:"",
    name:"",
    location:"",
    order: [],
    
    total:0,
    tax :0.12

  };

  componentDidMount() {
    this.setState({ data: (this.state.data) });
  }

   

  deleteOrder= id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const order = this.state.order.filter(order => order.id !== id) ;
    // Set this.state.friends equal to the new friends array

     

     this.setState({ order });
      
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  upOrder= id => {
    // const order = this.state.order.filter(order => order.id === id);


    // this.setState({ qty: this.state.order.qty + 1 });
   
    // //this.setState({ qty: this.state.qty + 1 });
    // //this.setState({ order : this.state.order.qty + 1 });
     
    //const order = this.state.order.reduce(order => order.id !== id) ;
    

   // this.setState({ order });

   this.setState({ qty: this.state.qty + 1 });
  };


   
  
  
   

  handleItemClick = id => {
    //let guessedCorrectly = false;
    //console.log (' message ', this.state.data);
    const newData = this.state.data.map((item,index) => {
      const newItem = { ...item };
      console.log(item)
      if (newItem.id === id) {
         
          this.setState({ order: this.state.order.concat(newItem) },
          this.setState({ total: this.state.total + (item.price) })
        // }
       
        
       )

      
        
      }
      return newItem;
    });
    
     
  };

  render() {
    return (
        <div>
        <Container style={{ marginTop: 30 }}>
        <Row>
        <Col size="md-4">
           <h2>MERN FULL STACK</h2>
        </Col>

        <Col size="md-8">
          <h2> My Projects</h2>
        </Col>
       </Row>

        <Row>
       <Col size="md-4">
            <Hero backgroundImage="/assets/images/ODB.NorthWestern.png">
            
                    <h3><center>"If you can think it ... I can do it " </center></h3>
                    {/* <button>More Photos </button> */}
            </Hero>
            {/* <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg">
                    <h4>My Image Here</h4>
            </Jumbotron>  */}

            <p>
          
         
                Website : www.obuenavidez.com<br/>
                Git Repo : www.github.com/obuenavidez<br/>
                Contact # : 773.567.3930<br/>
                Email : obuenavidez@gmail.com<br/><br/>
                <Link to="/sendmessage">  
                <FormBtn>
                        Message Me
                </FormBtn>
                </Link><br/>
                

                
            </p>
                

            </Col>   

            

            <Col size="md-8">
            {this.state.data.map(item => (
                // <ClickItem
                //   key={item.id}
                //   id={item.id}
                //   //shake={!this.state.score && this.state.topScore}
                //   handleClick={this.handleItemClick}
                //   image={item.image}
                //   //occupation={item.occupation}
                //   //location={item.location}
                //   name={item.name}
                // />
                
                <FriendCard2
                
                //addItem={this.addItem}
                //shake={!this.state.score}
                
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image}
                occupation={item.occupation}
                location={item.location}
                />
                
              ))}
        </Col>
         </Row> 

       


         <Row>
         
        
                
             
             
             
             

              
              
               
             
        
       
      
        </Row>  
        </Container>






        {/* <Footer /> */}
        
      </div>
    );
  }
}

export default Products;
