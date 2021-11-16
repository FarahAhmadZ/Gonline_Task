import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import All from './All'; 
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import  Details from './Details';

const Products=(props)=>{
   const [flagAll, setflagAll] = useState(true);
   const [flagcat1, setflagcat1] = useState(false);
   const [flagcat2, setflagcat2] = useState(false);
   const [flagcat3, setflagcat3] = useState(false);
   const [flagcat4, setflagcat4] = useState(false);
   const [searchT, setsearchT] = useState('');
   const handleChange = (event) => {
    setsearchT(event.target.value);
              }
      // console.log(props.one)       
    //console.log(searchT);
    
    const cat1=(event)=>{
      setflagAll(false);
        setflagcat1(true);
        setflagcat2(false);
        setflagcat3(false);
        setflagcat4(false);  
    }
    const cat2=(event)=>{
      setflagAll(false);
        setflagcat1(false);
        setflagcat2(true);
        setflagcat3(false);
        setflagcat4(false);  
    }
    const cat3=(event)=>{
      setflagAll(false);
        setflagcat1(false);
        setflagcat2(false);
        setflagcat3(true);
        setflagcat4(false);  
    }
    const cat4=(event)=>{
        setflagAll(false);
        setflagcat1(false);
        setflagcat2(false);
        setflagcat3(false);
        setflagcat4(true);  
    }
    const all=(event)=>{
    setflagAll(true);
    setflagcat1(false);
    setflagcat2(false);
    setflagcat3(false);
    setflagcat4(false); 
      
    }
    return (
     
    <div> {(props.one=='')?
    <div>
        <div style={{borderBottom:'solid'}}> 
        <AppBar position="static" style={colorB}>
            
            
        <Toolbar>
        <IconButton >
                       <ImageIcon />
          </IconButton>
          <Typography   sx={{ flexGrow: 1 }} style={text}>
           App Name
          </Typography>
          <Button style={text1}>{props.username}</Button>
          <IconButton>
                       <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        </div>

      <div className="parentProducts">
    <div className="childProducts"> 


 
   <div className="DivLink">
      <Link   
      onClick={all}  > All</Link>|
      <Link 
      onClick={cat1} > Category 1</Link>|
      <Link 
      onClick={cat2}> Category 2</Link>|
      <Link 
      onClick={cat3}>Category 3</Link>|
      <Link 
      onClick={cat4} > Category 4</Link>
      
   </div>
   <div className="searchText">
   <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
          style={sizetext}
          placeholder="search by product name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange = {handleChange}
        />
   </div>
 
 
   {
   (flagAll==true&&flagcat1==false&&flagcat2==false&&flagcat3==false&&flagcat4==false)?
   <All  search={searchT}/>:
   (flagAll==false&&flagcat1==true&&flagcat2==false&&flagcat3==false&&flagcat4==false)?
   <Cat1 search={searchT}/>:
   (flagAll==false&&flagcat1==false&&flagcat2==true&&flagcat3==false&&flagcat4==false)?
   <Cat2 search={searchT}/>:
   (flagAll==false&&flagcat1==false&&flagcat2==false&&flagcat3==true&&flagcat4==false)?
   <Cat3 search={searchT}/>:
   (flagAll==false&&flagcat1==false&&flagcat2==false&&flagcat3==false&&flagcat4==true)?
   <Cat4 search={searchT}/>:
   <></>}
 
       </div>
</div>

      </div>:
    <Details one={props.one}/>}
      </div> 
    )
}
const text={
    color:"#1f1d1d",
    fontSize:"3vh",
    }
    const text1={
        color:"#1f1d1d",
        fontSize:"2vh",
        }
const colorB={
    background:"#ffffff", 
}

const sizetext={     
    width:"80%"
}



export default Products;