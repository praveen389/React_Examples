import {useState} from 'react';

const Product4 =(props) =>{

    const[items,setItem]=useState([
        {pCode:1,pName:"Apple"},
        {pCode:2,pName:"Potato"},
        {pCode:3 ,pName:"Cabbage"},
        {pCode:4,pName:"Grapes"}
    ]);

  
   const prodItems=(
    items.map((item)=>{
        return(
            <li>{item.pName}</li>
        )
    })
   )
   return(
   <>
   <div>
    {props.isAdmin && prodItems}
   </div>
   </>
   )
        
   
    }

    export default Product4;