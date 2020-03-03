import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="colors/new">Add a color!</NavLink>
            </nav>
        </div>
    );

};

export default Nav;