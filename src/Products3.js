import {useState} from 'react';

const Product3 =(props) =>{

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
    props.isAdmin?prodItems:<h1>No Data Found</h1>
   )
        
   
    }

    export default Product3;