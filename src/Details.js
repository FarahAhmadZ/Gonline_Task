import { TrainRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import Link from '@mui/material/Link';
import All from './All';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Details=(props)=>{
    const [one, setone] = useState(false);
    return (
        (one==false)?
      <div>
        
        <div>
       
        <KeyboardBackspaceIcon style={{width:"20", marginLeft:"2%"}} onClick={(e)=>setone(true)} ></KeyboardBackspaceIcon>
        <img src={props.one.image} style={{width:"20%" ,height:"15%" , float:'center',display: 'block',  marginLeft: 'auto',
  marginRight: 'auto'}}/> 
      
      
       <div >
        
        <h2 style={{height:"10%",width:"100%",textAlign:'center'}}>{props.one.title}</h2>
        <h3 style={{textAlign:'center',height:"5%",width:"100%"}}>{props.one.price}</h3> 
        <h3 style={{height:"10%",width:"100%",textAlign:'center'}}>{props.one.category}</h3> <br/>
        <p style={{height:"30%",width:"100%",textAlign:'center'}}>{props.one.description}</p>
      </div>
    
</div>
</div>:
  <All  search=''/>
    )
}
export default Details ;
