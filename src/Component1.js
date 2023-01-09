import {useState} from "react";
import Products from "./Products";
import Products3 from "./Products3"
import Products4 from "./Products4"
import Product5 from "./Products5";
const Component1 =() =>{
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
            {/* <Products isAdmin={isAdmin}/> */}
            {/* <Products3 isAdmin={isAdmin}/> */}
            {/* <Products4 isAdmin={isAdmin}/> */}
            <Product5 isAdmin={isAdmin}/>


        </div>
    
        </>
    );
}

export default Component1;