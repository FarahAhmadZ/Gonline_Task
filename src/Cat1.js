import React, { useState } from 'react';
import Products from './Products';
const Cat1=(props)=>{

   const [one, setone] = useState([]);
   const [products, setproducts] = useState([]);
   const [flagDet, setflagDet] = useState(false);
    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(json=>setproducts(json))
    let obj=[];
    
    products.filter((val)=>{
      
    if(val.title?.toLowerCase().includes(props.search?.toLowerCase())&&props.search!=0){
       obj.push(val) }
    })
   
 const funDetalies=(even)=>{
    
   setone(even);
   setflagDet(true);
   }
//  console.log(obj.length)
 

   return( 
     
     (props.search==''&&flagDet==false)?
        <div >
          {
      // console.log('props.search== '),
            products.map((oneproduct) =>(
                
          
         <div className="oneProduct" key={oneproduct.id} onClick={(e)=>funDetalies(oneproduct)}>
             <div >
                           <img src={oneproduct.image} className="imagestyle"/><br/>
                           <div className="titlestyle">{oneproduct.title}</div>
                           <div className="pricestyle">{oneproduct.price}</div>
                          </div>
          </div>
             ))
             }</div>
            :(obj.length!=0&&props.search!=''&&flagDet==false)?
             
        <div>{
         // console.log('obj!=[]&&props.search!='),

            obj.map((oneproduct) =>(
         <div className="oneProduct" key={oneproduct.id} onClick={(e)=>funDetalies(oneproduct)}>
             <div  >
                           <img src={oneproduct.image} className="imagestyle"/><br/>
                           <div className="titlestyle">{oneproduct.title}</div>
                           <div className="pricestyle">{oneproduct.price}</div>
                          </div>
          </div>
             ))
             }</div>:
            (obj.length==0&&props.search!=''&&flagDet==false)?
             <div style={styleNot}>This product does not exist</div>
             :(flagDet==true)?
             <Products one={one}/>:
             <></>)
}
const styleNot={
 fontFamily:'arial',
 fontSize:'5vh',
 color:'red',
 marginTop:"5vh"

}
export default Cat1;