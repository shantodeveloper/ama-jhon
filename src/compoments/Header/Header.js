import React from 'react';
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="" /> 

           <nav>
            <a href="/Shop">Shop</a>
           <a href="/revew">revew</a>
           <a href="/manege">Manege order</a>
           </nav>
        </div>
    );
};

export default Header;