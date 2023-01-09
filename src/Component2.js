import {useState} from "react";
import Product2 from "./Products2";
const Component2 =() =>{
    const [isAdmin,setIsAdmin] =useState(false);
    const inputChangeHandler =(e) =>{
        setIsAdmin(e.target.checked);
        // console.log(isAdmin);
    }
    return(
        <>
        <div>
            <input type="checkbox" onChange={inputChangeHandler}/> IsAdmin
            <hr />
            <Product2 isAdmin={isAdmin}/>
        </div>
    
        </>
    );
}

export default Component2;