import React from "react";
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Home from "./Home";
import Customer from "./Customer";
import Product from "./Product";
import TempComp from "./TempComp";
import Notfound from "./NotFound";
import Books from "./Books";
import Pens from "./Pens";


export default function Routing(){
    return(
        <Router> 
            <div className='list'>

                <ul >
                <button type="button" >
                    <li>   <Link to="/"> Home </Link>   </li>
                </button>
                <button type="button">
                    <li>   <Link to="/Customer"> Customer </Link>   </li>
                </button>
                <button type="button">
                    <li>   <Link  to="/Product/">  Product </Link>   </li>
                </button>
                </ul>

                
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Customer/:id/:name" element={<Customer/>} />  
                {/*dynamic route placeholder ":id" replaced by value in url */}
                <Route path="/Product" element={<Product/>} />
                <Route path= "/Product/:id" element ={<TempComp/>} />  
                <Route path= "/books" element ={<Books/>} />     
                <Route path= "/pens" element ={<Pens/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>
            </div>
    </Router>
    )
}