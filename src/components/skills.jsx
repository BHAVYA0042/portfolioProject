import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././index.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRating from "./StarRating";

import CardList from './CardList';
import Webtech from './webtech';
import General from './General';
import Database from './Database';

function Skills() {

    
const text = {
  fontfamily: "source-code-pro, Menlo, Monaco, Consolas, monospace",
  textAlign : "left",

  letterSpacing: "3px"
 };

 const text1 = {
   fontfamily: "'Courier New', monospace",
   textAlign : "left",

  };


  // const rating = 3.5;
 


  return (
    
    <>
    <Container>




      
    <Row>
        <Col>
         
      <Card style={{ border: 'hidden'}}>
        <Card.Body>
        
          <Card.Title style={text} > <h3> My SKills</h3> </Card.Title>
    <br></br>

             <General/>
        </Card.Body>
    </Card>
        
</Col>


<Col>
         <br>
         </br>
         <br></br>
         <br></br>

      <Card style={{ border: 'hidden'}}>
        <Card.Body>
        
        

    <h5 style={text} >  Database Technologies:   </h5>

             <Database/>
        </Card.Body>
    </Card>
        
</Col>

</Row>



      <Row>
        <Col>
         
      <Card style={{ border: 'hidden'}}>
        <Card.Body>
        
        

    <h5 style={text} >  Programming Languages:   </h5>

             <CardList/>
        </Card.Body>
    </Card>
        
</Col>

<Col>
        
<Card style={{ border: 'hidden'}}>
      <Card.Body>

      
        <h5 style={text} >Web Technologies:</h5>

        <Webtech/>
        {/* <StarRating rating={rating} />
   */}
      </Card.Body>
</Card>
        
        </Col>

        
    </Row>

    </Container> 


</>
  );
  
}







export default Skills;
