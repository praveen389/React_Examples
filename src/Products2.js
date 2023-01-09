import {useState} from 'react';

const Product2 =(props) =>{

    const[items,setItem]=useState([
        {pCode:1,pName:"Apple"},
        {pCode:2,pName:"Potato"},
        {pCode:3 ,pName:"Cabbage"},
        {pCode:4,pName:"Grapes"}
    ]);

  
    return(
        props.isAdmin? items.map((item)=>{
            return(
                <div>
                    <li>{item.pName}</li>
                </div>
            )
        }):<h2>No data</h2>
    )
        
   
    }

    export default Product2;