
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Products from './Products';
import TextField from '@mui/material/TextField';
import './App.css'
import Details from './Details';
const Login= (props) =>{
  
  const [username, setusername] = useState('');
  const [pass, setpass] = useState('');
  const[flagLogin,setflag]=useState(false);
  const [Error, setError] = useState(false);

  
  const submit=()=>
{  
    let result=  fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers:{
                  "Content-Type":"application/json",
                  "Accept" :"application/json"
                },
                body:JSON.stringify({
                    username: username,
                    password: pass
                })
            })  .then(res=>res.json())
            .then(json=>{if(json.status=="Error")
            {
                    setflag(false);
                    setError(true);
                  } else{
                setflag(true);
               }} )
             
            }
   
  const handleChange1 = (event) => {
    setpass(event.target.value);
               }
  const handleChange2 = (event) => {
    setusername(event.target.value);
      };
    return (
     
        (!flagLogin)?
        
           <div className="container">
       <div className="child"><br/>
       <label className="loginString" >Login Page</label>
           <TextField 
              placeholder=" Username"
             style={styleText}
             onChange={handleChange2}
             />
           <br/> <br/>
             <TextField
               type="password"
               placeholder="Password"
              style={styleText}
              onChange={handleChange1}
               />
             <br/>
            
             {(username.length>0 &&pass.length>0)?
               <Button variant="outlined" style={loginString} 
               onClick={submit}>login</Button>:<></>
            
            }
         <p style={{color:"red"}}>{(Error)?"username or password is incorrect":<></>}</p>
              
               </div>
               </div>
         :(flagLogin)?
       
       <Products username={username} one=''/>:<></>
       
       
     
    );
  }

const styleText={
  outlineStyle: 'solid',
  marginLeft:'15%',
  marginTop:'8%',
  width:'80%',
  fontSize:'2vh'
}

const loginString={
  outlineStyle: 'solid',
  marginLeft:'15%',
  marginTop:'50%',
  width:'80%',
  fontSize:'3vh',
 
}

export default Login;