import {useState} from 'react';

const Products =(props) =>{

    const[items,setItem]=useState([
        {pCode:1,pName:"Apple"},
        {pCode:2,pName:"Potato"},
        {pCode:3 ,pName:"Cabbage"},
        {pCode:4,pName:"Grapes"}
    ]);

   if(props.isAdmin){
    return(
        <div>
            {
                items.map((item,index)=>{
                    return(
                        <>
                        <div key={item.pCode}>
                            <li>{item.pName}</li>
                        </div>
                        </>
                    )
    })
                    }
        </div>
    )
        }else {
            return(
                <>
                <h1>No data Found</h1>
                </>
            )
        }
   
    }

    export default Products;