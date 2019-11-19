import React from 'react';
import CurrList from "./CurrList";
import Grid from "@material-ui/core/Grid";

class Home extends React.Component{
    componentDidMount() {
        document.title = "Converter MX";
    }
    render() {
        return <>
            <div className="content-container">
                <Grid container justify="center">
                    <Grid item lg={8} md={10} sm={12}>
                        <CurrList/>
                    </Grid>
                </Grid>
            </div>
        </>
    }
}

export default Home;