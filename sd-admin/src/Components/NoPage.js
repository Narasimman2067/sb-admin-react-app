import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const NoPage = () => {
    const history=useHistory();
  return (
    <div className='nopage-btn'>
        <Button
      onClick={()=>history.push("/")} 
      >Home</Button>
<h1>sorry you are came to wrong Page😍
    please click home 
</h1>



    </div>
  )
}

export default NoPage