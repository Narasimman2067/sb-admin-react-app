import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'





 export function WelcomePage ()  {
  const history = useHistory();
  const logoutMethod =()=>{
    localStorage.removeItem("user-name")
    history.push("/login")
  }
  return (
    <div className='welcome-btn'>
      
      <div className='welcome-div'>
        <h1 >welcome to our App</h1>
       
        <nav>
        <div className='color-div1'>
         
         <h1>
         please login to view the contents
         </h1>
       
        
         <div className='search'>
          <span className='search2-btn'>
         <Button
        onClick={()=>history.push("/login")}
         variant="contained" color="primary">
            login
           </Button>
           <Button
          onClick={()=>history.push("/signup")}
         variant="contained" color="primary">
            SignUp
           </Button>
           </span>
          
          
         </div>
         </div>
    </nav>
   </div>
  
   
   
   
    
    </div>
    
  
   
    
    
     
  )
}