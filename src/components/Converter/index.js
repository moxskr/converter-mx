import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {connect} from 'react-redux';
import {fetchCurrList} from "../../actions/currency";
import {selectCurrList} from "../../selectors/currency";
import {convertCurrency} from "../../actions/converter";
import {selectIsLoadingConverter, selectResultConverter} from "../../selectors/converter";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";

class Converter extends React.Component{
    constructor(props) {
        super(props);
        props.fetchCurrList();
        this.state = {
            basicCurr : '',
            resultCurr : '',
            count : 0
        }
    }
    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    };
    submit = () => {
        const {basicCurr, resultCurr} = this.state;
        this.props.convertCurrency(basicCurr, resultCurr);
    };
    render() {
        const {currList, result, isLoading} = this.props;
        return(
            <section className="converter">
                <div className="content-container">
                    <Grid container justify="center">
                        <Grid item lg={8} md={10} sm={12}>
                            <Paper className="converter-card">
                                <Typography variant="h5">
                                    Converter
                                </Typography>
                                <Divider/>
                                {!isLoading && (<><form>
                                    <Grid container justify="space-between">
                                        <Grid item md={5} xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="currency-label">
                                                    Basic currency
                                                </InputLabel>
                                                <Select
                                                    labelId="currency-label"
                                                    value={this.state.basicCurr}
                                                    onChange={this.handleChange}
                                                    name="basicCurr"
                                                >
                                                    {currList.map(item => <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item md={1} xs={12}>
                                            <TextField
                                                value={this.state.count}
                                                onChange={this.handleChange}
                                                name="count"
                                                label="Count"
                                            />
                                        </Grid>
                                        <Grid item md={5} xs={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="currency-label">
                                                    Result currency
                                                </InputLabel>
                                                <Select
                                                    labelId="currency-label"
                                                    value={this.state.resultCurr}
                                                    onChange={this.handleChange}
                                                    name="resultCurr"
                                                >
                                                    {currList.map(item => <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Divider/>
                                <Grid container className="form-footer">
                                    <Grid item xs={6}>
                                        <Typography variant="h6">
                                            Result : {result * this.state.count || 0}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{textAlign : 'right'}} onClick={this.submit}>
                                        <Button color="primary" variant="contained">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid></>)}
                                {isLoading && <Grid container justify="center">
                                    <Grid item xs={12} className="progress-container">
                                        <CircularProgress/>
                                    </Grid>
                                </Grid>}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currList : selectCurrList(state),
    result : selectResultConverter(state),
    isLoading : selectIsLoadingConverter(state)
});

export default connect(mapStateToProps, {fetchCurrList, convertCurrency})(Converter);