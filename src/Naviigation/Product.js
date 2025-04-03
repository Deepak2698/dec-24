import React from 'react'
import { Link} from 'react-router-dom';

const  Product  = () =>{
       return (
         <div>
            <h1>Product</h1>
            <strong>select a Product</strong>
            <ul>
                <li> 
                <Link to ="/books"> Books</Link>  {/* Child/Nested Route */}
                </li>
                <li>
                <Link to ="/pens"> Pen</Link>      {/* Child/Nested Route */}
                </li>
            </ul>
         </div>
        )
};

export default Product;