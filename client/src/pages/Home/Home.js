import React from "react";
//import {  Hero } from "../../components/Hero";
import {  Container } from "../../components/Grid";
import { Row, Col } from "../../components/Grid";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";

// import { Hero} from "../../components/Hero";
 
const Home = () => (
  <div>
    <Hero backgroundImage="/assets/images/Ysabels.jpg">
      <center>
      <h1>Oscar D. Buenavidez Jr.</h1>
      <h2>Good Food ... Good Place !!!</h2>
      <h3>4908 W Irving Park Rd 
       Chicago, Illinois 60641 | (773) 481-3781</h3> 
       </center>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-8">
          <h1>Welcome to Ysabel's Grill</h1>
        </Col>
        <Col size="md-4">
          <h1>Store Hours</h1>
        </Col>

      </Row>
      <Row>
        <Col size="md-8">
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
            at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
            erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
            nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas
            vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero.
            Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam
            tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit
            pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.


          </p>
        </Col>
        <Col size="md-4">
        <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
            at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
        </p>
        </Col>

      </Row>

      <Row>
        <Col size="md-4">
        <h2>How to Order Online ?</h2>
        </Col>
        <Col size="md-4">
        <h2>Locate Us</h2>
        </Col>
        <Col size="md-4">
        <h2>Rate Us !</h2>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
            at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
            erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
            <Link to="/products"> > Order Now </Link>

          </p>
        </Col>
        <Col size="md-4">
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            


          </p>
        </Col>
        <Col size="md-4">
        <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum  
        </p>
        </Col>

      </Row>
      

       
    </Container>
  </div>
);

export default Home;
