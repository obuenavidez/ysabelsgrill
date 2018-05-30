import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
      <Container style={{ marginTop: 330 }}>
        <Row>
          <Col size="md-8">
            {/* <Jumbotron>
              <h2>Add Product </h2>
            </Jumbotron> */}
            <h2>Send Me A Message ... </h2>
            <form>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                placeholder="Product Name (required)"
              />
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="Price (required)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.lname && this.state.fname)}
                onClick={this.handleFormSubmit}
              >
                Add Product
              </FormBtn>
            </form>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Users;
