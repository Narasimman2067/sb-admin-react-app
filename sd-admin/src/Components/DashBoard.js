import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';

const DashBoard = () => {
  const history=useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])
  return (
    <div>

            
            <div className='app-dash'>
          

            <div class="row">
            <div class="col">
            <h1 class="dash-div">
            DashBoard</h1>
            </div>
            <div class="col">
            <button class="dash-btn">
            <span>⬇️</span>Generated Button</button>
            </div>
            </div>
            
            <Row className='row'>
              <Col >
              <div class="dash-content row-grid ">
            <div class="col ">
            <div class="dash-box ">
            <p class="dash1" id="dash-colorbox">
            <span>EARNINGS(MONTHLY)</span>

            <h3 class="dash-img">📆</h3>
            <h1 class="dash-ruppe">$40,000</h1>
            </p>
            </div>
            
            <br/>
            <br/>
            <div class="dash-box">
            <p class="dash2 " id="dash-colorbox">
            <span>EARNINGS(ANNUAL)</span>
            <h3 class="dash-img">💲</h3>
            <h1 class="dash-ruppe">$215,000</h1>
            </p>
            </div>
            <br/><br/>
            <div class="dash-box">
            <p class="dash3 " id="dash-colorbox">
            <span>TASKS</span>
            <h3 class="dash-img">🗒️</h3>
            <h1 class="dash-ruppe">50%</h1>
            </p>
            </div>
            <br/><br/>
            <div class="dash-box">
            <p class="dash4 " id="dash-colorbox">
            <span>PENDINGREQUESTS</span>
            <h3 class="dash-img">💬</h3>
            <h1 class="dash-ruppe">18</h1>
            </p>
            </div>
            </div>
            </div>
              </Col>
            </Row>
           
            </div>
            </div>   
                )
}

export default DashBoard;