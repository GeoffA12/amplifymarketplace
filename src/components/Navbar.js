import React from "react";
import { NavLink } from 'react-router-dom';
import { Menu as Nav, Icon, Button } from "element-react";

const Navbar = ({ user, handleSignOut }) => (
    
    // Default active 1 means the first menu from the left item will the active menu item
    <Nav mode="horizontal" theme="dark" defaultActive="1">
        <div className="nav-container">
            <Nav.Item index="1">
                <NavLink to="/" className="nav-link">
                    <span className="app-title">
                        <img src="https://icon.now.sh/account_balanace/f90" alt="App Icon" className="app-icon" />
                        AmplifyAgora
                    </span>
                </NavLink>
            </Nav.Item>

            {/* Navbar items */}
            <div className="nav-items">
                <Nav.Item index="2">
                    <span className="app-user">Hello, {user.username}</span>
                </Nav.Item>
                <Nav.Item index="3">
                    <NavLink to ="/profile" className="nav-link">
                        <Icon name="setting" />
                        Profile
                    </NavLink>
                </Nav.Item>
                <Nav.Item index="4">
                    <Button type="warning" onClick={handleSignOut}>Sign Out</Button>
                </Nav.Item>
            </div>
        </div>
    </Nav>
);

export default Navbar;
