import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from "../Images/phosing.svg";
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Dash2() {
  const history=useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])
  return (
    <div className="dash2-color">
<h1>Colors</h1>
<Row>

<Col>
<div className="color2-div2">
<h6>Server Migration</h6>
<h6>20%</h6>
</div>

<div className="color2-btn2"> 
    
<button className="color2-btndiv2" ></button>

</div>


<div className="color3-div3">
<h6>Sales Tracking</h6>
<h6>40%</h6>
</div>

<div className="color3-btn3"> 
    
<button className="color3-btndiv3" ></button>

</div>
<div className="color3-div3">
<h6>Customer Database</h6>
<h6>60%</h6>
</div>



<div className="color4-btn4"> 
    
<button className="color4-btndiv4" ></button>

</div>
<div className="color4-div4">
<h6>
Payout Details</h6>
<h6>80%</h6>
</div>
<div className="color5-btn5"> 
    
<button className="color5-btndiv5" ></button>

</div>




<div className="color6-div6">
<h6>Account Setup</h6>
<h6>Complete!</h6>
</div>

<div className="color6-btn6"> 
    
<button className="color6-btndiv6" ></button>

</div>







</Col>







      
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
