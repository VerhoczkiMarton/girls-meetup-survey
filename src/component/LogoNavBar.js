import React from "react";
import Navbar from "react-bootstrap/Navbar";

const LogoNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={window.location.origin + '/codecool_symbol_flat .png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/>
            </Navbar.Brand>
        </Navbar>
    );
};

export default LogoNavBar;