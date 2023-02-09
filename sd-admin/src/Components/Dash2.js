import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from "../phosing.svg";
import Form from 'react-bootstrap/Form';

function Dash2() {
  return (
    <div className="dash2-color">
      <Row>
        <Col>
          <h2>Illustration</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
        </Col>
      </Row>
      <Row>

        <Col>
        <div className="color-div">
        <h5>Server Migration</h5>
        <h5>20%</h5>
        </div>
        
        <div className="color-btn"> 
            
        <Button className="color-btndiv" ></Button>
        
        </div>
        <div className="color-div">
        <h5>Server Migration</h5>
        <h5>20%</h5>
        </div>
        
        <div className="color-btn"> 
            
        <Button className="color-btndiv" ></Button>
        
        </div>
        <div className="color-div">
        <h5>Server Migration</h5>
        <h5>20%</h5>
        </div>
        
        <div className="color-btn"> 
            
        <Button className="color-btndiv" ></Button>
        
        </div>
        <div className="color-div">
        <h5>Server Migration</h5>
        <h5>20%</h5>
        </div>
        
        <div className="color-btn"> 
            
        <Button className="color-btndiv" ></Button>
        
        </div>
        <div className="color-div">
        <h5>Server Migration</h5>
        <h5>20%</h5>
        </div>
        
        <div className="color-btn"> 
            
        <Button className="color-btndiv" ></Button>
        
        </div>
      
        
       
       
       
        </Col>
      </Row>

      <Row>
        <Col xl={2}>
          <Button className="dash2-btn" variant="primary">
            <h4>Primary</h4>
            <h4>#1cc88a</h4>
          </Button>
          <Button className="dash2-btn" variant="success">
            <h4>Success</h4>
            <h4>#1cc88a</h4>
          </Button>
          <Button className="dash2-btn" variant="info">
            <h4>Info</h4>
            <h4>#36b9cc</h4>
          </Button>
          <Button className="dash2-btn" variant="warning">
            <h4>Warning</h4>
            <h4>#f6c23e</h4>
          </Button>
        </Col>
        <Col xl={2}>
          <Button className="dash2-btn" variant="light">
            <h4>light</h4>#f8f9fc<h4></h4>
          </Button>
          <Button className="dash2-btn" variant="secondary">
            <h4>Secondary</h4>
            <h4>#858796</h4>
          </Button>
          <Button className="dash2-btn" variant="dark">
            <h4>Dark</h4>
            <h4>#5a5c69</h4>
          </Button>
          <Button className="dash2-btn" variant="danger">
            <h4>danger</h4>
            <h4> #f8f9fc </h4>
          </Button>
        </Col>
        <Col className="dash2-dev">
          <h1>Development Approach</h1>
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes. Before working with this theme, you should become familiar
            with the Bootstrap framework, especially the utility classes.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Dash2;
