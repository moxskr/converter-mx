import React from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function Header() {
    return <AppBar className="header" position="fixed" color="primary">
        <Toolbar className="header--toolbar">
            <Typography variant="h6">
                <Link to="/">Converter MX</Link>
            </Typography>
            <Link to="/convert">
                <Button color="secondary" variant="contained">
                    go to converter
                </Button>
            </Link>
        </Toolbar>
    </AppBar>
}

export default Header;