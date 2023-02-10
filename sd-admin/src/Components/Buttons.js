import { Button,ButtonGroup, Form, InputGroup } from 'react-bootstrap'
import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import info from '../Images/info.png'
import fb from '../Images/facebook.png'
import checked from '../Images/checked.png'
import danger from "../Images/medium.png"
import trash from "../Images/trash.png"
import arrow from "../Images/arrow.webp"
import { useHistory } from 'react-router-dom'



export const Buttons = () => {
   const history=useHistory();
   useEffect(()=>{
     if(!localStorage.getItem("user-name"))
     history.replace("/login")
     },[])
  return (

    <div className='btn-margin'>
        <Row>
            <Col xl={6}>
            <h1>Buttons</h1>
        <br/>
      

        <h6>Circle Buttons</h6>
       
        <p>Use Font Awesome Icons (included with this theme package) along with the
            circle buttons as shown in the examples below!</p>

<h6 className='btn-circle'>.btn-circle</h6>
<span>
<img src={checked} alt=''/>
<img src={info} alt=''/> 
<img src={fb} alt=''/>

<img className="danger" src={danger} alt=''/>
<img className="danger2" src={trash} alt=''/>
</span>

<h6 className='btn-circle'>.btn-circle .btn-sm</h6>
<span className='small-btn'>
<img src={checked} alt=''/>
<img src={info} alt=''/> 
<img src={fb} alt=''/>

<img className="danger" src={danger} alt=''/>
<img className="danger2" src={trash} alt=''/>


</span>
<h6 className='btn-circle'>.btn-circle .btn-lg</h6>
<span className='large-btn'>
<img src={checked} alt=''/>
<img src={info} alt=''/> 
<img src={fb} alt=''/>

<img className="danger" src={danger} alt=''/>
<img className="danger2" src={trash} alt=''/>


</span>


<h6>Brand Buttons</h6>
<p>Google and Facebook buttons are 
available featuring each company's 
respective brand color. They are
used on the user login and 
registration pages.
</p>    

<p>
You can create more custom buttons 
by adding a new color variable in
the <mark>_variables.scss</mark> file and then
using the Bootstrap button variant 
mixin to create a new style,
as demonstrated in the<mark class='transparent'>_buttons.scss</mark> file.

</p>
<div className='goog-fb'>
<Button variant='danger'>G-Google+</Button>
<br/>
<br/>
<Button variant='primary'>fb-faceBook</Button>

</div>


</Col>
        <Col>
        <h6>Split Buttons with Icon</h6>
        <p>
        Works with any button colors, 
        just use the .btn-icon-split class 
        and the markup in the examples below. 
        The examples below also use the 
        .text-white-50 helper class on the icons 
        for additional styling, but it is not required.
        </p>
        
        <InputGroup className="mb-3">
        <Button variant="outlined-secondary" id="button-addon1">
         🏴
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input'
        placeholder="Split Button Primary"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon2">
         ✅
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input2'
        placeholder="Split Button Success"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon3">
         <img className='info-btn' src={info} alt=''/>
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input3'
        placeholder="Split Button info"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon4">
         <img className='info-btn' src={danger} alt=''/>
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input4'
        placeholder="Split Button warning"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon5">
         <img className='info-btn' src={trash} alt=''/>
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input5'
        placeholder="Split Button danger"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon6">
         <img className='info-btn' src={arrow} alt=''/>
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input6'
        placeholder="Split Button secondary"
       />
        </div>
     </InputGroup>
     <InputGroup className="mb-3">
        <Button variant="outlined-secondary"  id="button-addon7">
         <img className='info-btn' src={arrow} alt=''/>
        </Button>
        <div id="btn2">
        <Form.Control
       
       id='btn2-input7'
        placeholder="Split Button Light"
       />
        </div>
     </InputGroup>
        
       
      
    
        
        </Col>
</Row>
        
        

    </div>
  )
}
