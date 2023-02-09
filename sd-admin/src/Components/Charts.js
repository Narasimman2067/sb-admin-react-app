import React from "react";
import logo from "../download.png";
import logo1 from "../donutchart.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";

export function Charts() {
return (
<div>
<div className="App">
<Row>
<Col>
<Dropdown>
<Dropdown.Toggle variant="outlined-primary" className="drop">
<h3>Earnings Overview</h3>
</Dropdown.Toggle>
<Dropdown.Menu align="end">
<Dropdown.Item className="drop-header" href="#/action-4">
dropdown header
</Dropdown.Item>
<hr />
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
</header>
</Col>

<Col>
<Dropdown>
<Dropdown.Toggle variant="outlined-primary" className="drop">
<h3>Revenue Sources</h3>
</Dropdown.Toggle>
<Dropdown.Menu align="end">
<Dropdown.Item className="drop-header" href="#/action-4">
dropdown header
</Dropdown.Item>
<hr />
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<header className="App-header">
<img src={logo1} className="App-logo" alt="logo" />
</header>
</Col>
</Row>
</div>
</div>
);
}

export default Charts;
