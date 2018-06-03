import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Hero from "../../components/Hero";

// import Jumbotron from "../../components/Jumbotron";
// import { Link } from "react-router-dom";


class Users extends Component {
  state = {
    users: [],
    fname: "",
    lname: "",
    message: ""
  };

  componentDidMount() {
    this.loadUsers();
  }
  componentDidUpdate(){
    console.log(this.state);
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, fname: "", lname: "", message: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fname && this.state.lname) {
      API.saveUser({
        fname: this.state.fname,
        lname: this.state.lname,
        message: this.state.message
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (



      <Container style={{ marginTop: 30 }}>
       <Row>
          <Col size="md-4">
            <h1> About Me</h1>
          </Col>
          <Col size="md-4">
            <h1> <h2>Send Me A Message ... </h2></h1>
          </Col>
       </Row>

       <Row>
       <Col size="md-4">
       <Hero backgroundImage="/assets/images/ODB.NorthWestern.png">
       <h3><center>"If you can think it ... I can do it "</center></h3>
       </Hero>
       {/* <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg">
              <h4>My Image Here</h4>
       </Jumbotron>  */}
       <br/>
       <br/>
        <p>
          
         
          Website : www.obuenavidez.com<br/>
          Git Repo : www.github.com/obuenavidez<br/>
          Contact # : 773.567.3930<br/>
          Email : obuenavidez@gmail.com<br/><br/>
           

         
          </p>
       </Col>   
       
       <Col size="md-8">
            {/* <Jumbotron>
              <h2>Add Product </h2>
            </Jumbotron> */}
            
            <form>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                placeholder="Your Name (required)"
              />
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="Subject (required)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Message Here and Callbacks (required)"
              />
              <FormBtn
                disabled={!(this.state.lname && this.state.fname)}
                onClick={this.handleFormSubmit}
              >
                Send
              </FormBtn>
            </form>
          </Col>
        
       </Row> 

        
      
    </Container>
      
         
          
        
    );
  }
}

export default Users;
