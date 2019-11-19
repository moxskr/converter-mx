import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Converter from "./Converter";

function App() {
    return(
        <Router>
            <Switch>
                <Layout>
                    <Route path="/convert" exact component={Converter}/>
                    <Route path="/" exact component={Home}/>
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;