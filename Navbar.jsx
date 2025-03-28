import React,{useState} from "react";
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from'../Assets/cart_icon.png';
import {Link} from "react-router-dom";

const Navbar =() => {

    const[menu,setMenu]=useState("shop");
    return(
        <nav>
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p> 
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids '>Kid</Link>{menu==="kids"?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-court">0</div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;