import React from 'react';

export function Navbar(props) {
   return(
    <div id='navbar'>
        <h1 className="titre">PORSHE</h1>
        <p className="wallet">wallet <br /> <span className="argent">{props.argent}$</span></p>
    </div>
    )
    
}

export default Navbar;