import {useState} from 'react';

const Product5 =(props) =>{

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
   );
  
   switch (props.isAdmin) { 

    case true: return prodItems;
        break;
    case false :return <h1>No data Found</h1>    
        break;
    default : return null;  

   }
        
   
    }

    export default Product5;