import React, { Component } from 'react';   

//stateless functional componenet

const Nav = (props) =>{

    return ( 

        <nav className="navbar navbar-light">Nav {props.countersCount}</nav>
     );
}
 
export default Nav ;