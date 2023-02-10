
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";

import Base from './Base/Base';

import DashBoard from './Components/DashBoard';

import Charts from './Components/Charts';
import  { WelcomePage } from './Components/WelcomePage';
import Dash2 from './Components/Dash2';

import { Buttons } from './Components/Buttons';
import {  Route,  Switch} from 'react-router-dom';

import AuthPage from './Components/AuthPage';
import SignUp from './Components/SignUp';
import NoPage from './Components/NoPage';
import Tables from './Components/Tables';


function App() {
 
  return (
    <div className="App">
     <Base/>
     <Switch>
<Route exact path="/">
<WelcomePage/>

</Route>
<Route path="/buttons">
<Buttons/>
</Route>
<Route path="/charts">
<Charts/>
</Route>

<Route path="/login">
<AuthPage/>

</Route>

<Route path="/dashboard">
<DashBoard/>
<Charts/>
<Dash2/>
</Route>
<Route path="/signup">
<SignUp/>

</Route>
<Route path="/color">
<Dash2/>

</Route>
<Route path="/tables">
<Tables/>

</Route>
<Route path="**">
  
  <NoPage/>
  
 </Route>
     </Switch>
     
     

    
      {/* <Base/>
      <DashBoard/>
      <Charts/>
     
      <Dash2/>
     <Buttons/> */}
   
    </div>
  );
}

export default App;
