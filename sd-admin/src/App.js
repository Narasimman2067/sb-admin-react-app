import logo from './download.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";
import Base from './Base/Base';

import DashBoard from './Components/DashBoard';

import Charts from './Components/Charts';
import DashColor from './Components/DashColor';
import Dash2 from './Components/Dash2';


function App() {
  return (
    <div className="App">
     
     
    
      <Base/>
      <DashBoard/>
      <Charts/>
     
      <Dash2/>
   
    </div>
  );
}

export default App;
