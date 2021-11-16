import React, { Component } from "react";
import {  BrowserRouter as Router, Route,Link, Switch  } from "react-router-dom";
import { FaSearch} from "react-icons/fa";
import { BlockList } from "net";
import MapsLocalParking from "material-ui/svg-icons/maps/local-parking";
class App extends Component {
  obj=[];
  state={
    username :"",
    password:"",
    flagUserPass: true,
    flagLogin:true,
    products:[],
    flagProduct:false,
    jewelery:[],
    electronics:[],
    menClothing:[],
    womenClothing:[],
    searchProduct:[],
    flag :false,
    detailsarray:[],
    text:'',
    id:0,
    searchArray:[],
    cat:0
      
  }
  
  onClick=(e)=>{ 
    this.setState({flag:!this.state.flag,text:''})
  }
  componentDidMount(){
    this.setState({username:'',password:'',flagUserPass:true,flagLogin:true,flagProduct:false})
    fetch('https://fakestoreapi.com/products')
           .then(res=>res.json())
           .then(json=>this.setState({products:json}))

    //console.log(" products "+this.state.products)
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>this.setState({jewelery:json}))

    //console.log("jewelery "+this.state.jewelery)
    fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>this.setState({electronics:json}))
           
    //console.log("electronics "+this.state.electronics)
    fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res=>res.json())
            .then(json=>this.setState({ menClothing :json}))

    //console.log("menClothing"+this.state.menClothing)
     fetch("https://fakestoreapi.com/products/category/women's clothing")    
            .then(res=>res.json())
            .then(json=>this.setState({ womenClothing :json}))


  }
   
  
 login=()=> {
     
   
  if(this.state.username.length>0&&this.state.password.length>0){
  let result=  fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept" :"application/json"
            },
            body:JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })  .then(res=>res.json())
        .then(json=>{
          if(json.status=="Error"){
           this.setState({flagLogin:false,flagUserPass:true});
          console.log("Error");

           } else{
            this.setState({flagLogin:true,flagUserPass:true,flagProduct:true});
           
         }
          
          
         } )
      }
      else{
        this.setState({flagUserPass:false})
      }


          }
onChange=(e)=>{
 this.setState({text:e})
   this.obj=[]
 var value;
  if(this.state.cat==0)
  value=this.state.products
  else
  if(this.state.cat==1)
  value=this.state.menClothing
  if(this.state.cat==2)
  value=this.state.womenClothing
  if(this.state.cat==3)
  value=this.state.electronics
  if(this.state.cat==4)
  value=this.state.jewelery
  {value.filter((val)=>{
    
    if(val.title?.toLowerCase().includes(e?.toLowerCase())&&e != ""){
      this.obj.push(val)

      
    }
  })

  
  }
  
         }//onChange
   
  

 
  maparray=(A)=>{
 
 return(
 <div>{A.map((oneproduct) =>(
  <div style={{ display: 'inline-block',  width:'300px',height: '280px',  border: '1px solid ', margin:20,padding:10,marginLeft:40,
  backgroundColor:'#D3D3D3' }}><div onClick={this.onclick=()=>{
                 this.setState({flag:!this.state.flag,detailsarray:oneproduct})

                }}>
                    <img src={oneproduct.image} style={{width:250 ,height:200 ,marginLeft:'auto',marginRight:'auto',paddingLeft:20 }} /><br/>
                    <div style={{height:50,width:300,textAlign:'center'}}>{oneproduct.title}</div>
                    <div style={{textAlign:'center',height:40,width:300,marginTop:10}}>{oneproduct.price}</div>
                   </div>
      </div>))}</div>)
  }      

 mapone=(A)=>{
   return (<div onClick={this.onclick=()=>{
    this.setState({flag:!this.state.flag,detailsarray:A})}}>
  <img src={A.image} style={{width:250 ,height:200 ,marginLeft:'auto',marginRight:'auto',paddingLeft:20 }} /><br/>
  <div style={{height:400,width:300,textAlign:'center'}}>{A.title}</div>
  <div style={{textAlign:'center',height:40,width:300}}>{A.price}</div>

  </div>)}
  render () {
      return (
      
     
     <div style={{background:'#eeeeee',width:'100%',height:'100%',position:'absolute', top:'0px', right:'0px',  bottom:'0px', left:'0px'}}>
       {(this.state.flagProduct==false&&this.state.flag==false)?
     <div style={{ background:'#FFFFFF' ,border: '2px solid ' ,margin:'auto', width:'32%',height:600, alignItems: 'center',marginTop:100}} >
  
       
         <br/> <br/>
           <label style={{marginLeft:'33%', fontSize:40 }} >Login Page</label>
         <br/> <br/><br/> <br/><br/> <br/>
          
            <input style={{ marginTop:10, marginLeft:100 , width: '350px',  border: '2px solid ' ,height:30   }} 
              placeholder="User Name"
              onChange = {(e) => this.setState({username:e.target.value})}
              />
    <br/> <br/>
              <input  style={{ marginTop:10, marginLeft:100 , width: '350px',  border: '2px solid ' ,height:30     }} 
                type="password"
                placeholder=" password"
                onChange = {(e) => this.setState({password:e.target.value})}
                />
              <br/><br/>  <br/> <br/>  <br/> <br/><br/> <br/><br/>
              
 
              <button    onClick={this.login} style={{ height:50, marginTop:10, marginLeft:150, width: '250px',height:'40px',fontSize:'18px',  border: '2px solid ',background:'#D3D3D3'}} >
         Login </button>
      <div style={{color:'red ',marginLeft:10}}> {(this.state.flagUserPass==true)?"":"username or password is empty"} </div> 
      <div style={{color:'red ',marginLeft:10, marginTop:20}}> {(this.state.flagLogin==true)?"":"username or password is incorrect"} </div> 
       </div>   
      : 
      <div style={{background:"FFFFFF",position:'absolute', top:'0px', right:'0px',  bottom:'0px', left:'0px'}}>
     {(this.state.flag==false)?<div>
         <Router>
      <div style={{backgroundColor:'#eeeeee'}}>
        <div style={{backgroundColor:'white', height:85,width:'100%',overflow:'hidden',borderBottom: "1px solid black"}}>
          <img style={{width:'150px',height:'140px',float:'left',marginRight:30, marginTop:-30,marginLeft:10}} src="/gonline.png" />
          <h2 style={{float:'left'}} >App Name </h2>
          <div style={{float:'right'}}> <h4 style={{float:'left', fontSize:17,marginRight:20}} >{this.state.username} </h4> </div>
        </div>
        <div>
          <div style={{margin: 'auto',width: '500px',padding:'20px'}}>
            <Link to="/" onClick={(e)=>this.setState({cat:0})}>  All  </Link>
         |
            <Link to="/Categpry1" onClick={(e)=>this.setState({cat:1})}>  Men's Clothing </Link>
         |
            <Link to="/Categpry2" onClick={(e)=>this.setState({cat:2})}>  Women's Clothing  </Link>
         |
            <Link to="/Categpry3" onClick={(e)=>this.setState({cat:3})}>  Electronics  </Link>
         |           
            <Link to="/Categpry4"onClick={(e)=>this.setState({cat:4})}>  Jewelry  </Link>
<br/></div>
<div style={{margin: 'auto',width: '326px',border: '2px solid',borderRadius:'10px'}}>
            <FaSearch style={{border: 'none', border: 0,background:'#fff',height:15}} />
           

               <input type="text" name="title" placeholder = "search by product titel" style={{border: 'none',border: 0,background:'#fff', height:25,
              width: 300  }} min="0" max="100"  onChange = {(e) =>this.onChange(e.target.value)}  />         
              
            
        </div>
        <br/>
         </div>
           {(this.state.text=='')? <div style={{backgroundColor:'white', width:1170, marginLeft:'12%'}}>
        <Switch>
         {(this.state.cat==0)?
          <Route exact path="/">
            
         {this.maparray(this.state.products)}
          </Route>
:(this.state.cat==1)?
          <Route exact path="/Categpry1">
          {this.maparray(this.state.menClothing)}
          
          </Route>
:(this.state.cat==2)?
          <Route exact path="/Categpry2">
          {this.maparray(this.state.womenClothing)}
          </Route>
:(this.state.cat==3)?
          <Route exact path="/Categpry3">
          {this.maparray(this.state.electronics)}
          
          </Route>
:
          <Route exact path="/Categpry4">
         
          {this.maparray(this.state.jewelery)}
           </Route>

         
         }
         

        </Switch>

      </div>
      :<div>{(this.obj.length!=0)?
      
       this.maparray(this.obj):
        <div style={{fontFamily:'arial',fontSize:'25px',color:'red'}}>This item does not exist</div>
      }
  </div>
      
    

           } </div>


 
 </Router>                 
<br/>
</div>:

<div >
<div style={{backgroundColor:'white', height:85,width:'100%',overflow:'hidden',borderBottom: "1px solid black"}}>
          <img style={{width:'150px',height:'140px',float:'left',marginRight:30, marginTop:-30,marginLeft:10}} src="/gonline.png" />
          <h2 style={{float:'left'}} >App Name </h2>
          <div style={{float:'right'}}> <h4 style={{float:'left', fontSize:17,marginRight:20}} >{this.state.username} </h4> </div>
        </div>
        <div style={{margin:100,marginTop:0}}>
  <img src="/back.png" style={{width:30,height:30}} onClick={this.onClick} /> <br/><br/>
 {/* <button onClick={this.onClick}> back</button> */}
<div style={{position:'relative', width:'750px',height:600}}>
 <div style={{width:'100%',left:'25%',top:'25%'}}>
    <img src={this.state.detailsarray.image} style={{width:250 ,height:220 , float:'right'}}/> 
  

<div style={{position:'absolute', overflowY:'auto',width:'100%',height:'100%'}}>
 
  <h2 style={{height:70,width:500,textAlign:'center'}}>{this.state.detailsarray.title}</h2>
  <h3 style={{textAlign:'center',height:20,width:500}}>{this.state.detailsarray.price}</h3> 
  <h3 style={{height:40,width:500,textAlign:'center'}}>{this.state.detailsarray.category}</h3> <br/>
  <p style={{height:40,width:400,textAlign:'center'}}>{this.state.detailsarray.description}</p>
</div> 
</div> </div>
</div></div>}
                

        
                </div>
                }
                           
            
            </div>
          );
          
        }
        
        }

export default App;