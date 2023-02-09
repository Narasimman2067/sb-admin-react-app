import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/Row';

const DashColor = () => {
  return (
            <div>
          

           <Row>
            <Col>
            <h1 class="dash-div">
            DashBoard</h1>
            </Col>
            <Col>
            <button class="dash-btn">
            <span>⬇️</span>Generated Button</button>
            </Col>
            </Row>
            
           
            <Row className='row-grid'>
            <div class="dash-content">
             <Col class="dash-box">
           
            <p class="dash1" id="dash-colorbox">
            <span>EARNINGS(MONTHLY)</span>

            <h3 class="dash-img">📆</h3>
            <h1 class="dash-ruppe">$40,000</h1>
            </p>
           
            <br/>
            <br/>
           
            <p class="dash2 " id="dash-colorbox">
            <span>EARNINGS(ANNUAL)</span>
            <h3 class="dash-img">💲</h3>
            <h1 class="dash-ruppe">$215,000</h1>
            </p>
          
            <br/><br/>
           
            <p class="dash3 " id="dash-colorbox">
            <span>TASKS</span>
            <h3 class="dash-img">🗒️</h3>
            <h1 class="dash-ruppe">50%</h1>
            </p>
             <br/><br/>
           
            <p class="dash4 " id="dash-colorbox">
            <span>PENDINGREQUESTS</span>
            <h3 class="dash-img">💬</h3>
            <h1 class="dash-ruppe">18</h1>
            </p>
            
            </Col>
            </div>
            </Row> 
            </div>  
                )
}

export default DashColor;