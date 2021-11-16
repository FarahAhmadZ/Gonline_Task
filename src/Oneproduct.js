import React, { useState } from 'react';
const Oneproduct=(props)=>{

   return(
         <div className="oneProduct">
             <div>
                           <img src={props.oneproduct.image} className="imagestyle" /><br/>
                           <div className="titlestyle">{props.oneproduct.title}</div>
                           <div className="pricestyle">{props.oneproduct.price}</div>
                          </div>
          </div>
             )
}
export default Oneproduct;