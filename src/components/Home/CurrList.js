import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {connect} from 'react-redux';
import {fetchCurrList, addFavoriteCurr, removeFavoriteCurr} from "../../actions/currency";
import {selectCurrList, selectIsLoadingCurrList} from "../../selectors/currency";
import {CircularProgress} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CurrItem from "./CurrItem";

class CurrList extends React.Component{
    constructor(props) {
        super(props);
        props.fetchCurrList();
    }
    handleFavorite = id => {
        this.props.addFavoriteCurr(id);
    };
    sortByFavoriteStatus = list => {
        list.sort((a, b) => {
            return Number(b.favor) - Number(a.favor);
        });
        return list;
    };
    removeFavorite = id => {
        this.props.removeFavoriteCurr(id);
    };
    render() {
        const {currList, isLoading} = this.props;
        return <Paper>
            <Table aria-label="simple-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Currency Name</TableCell>
                        <TableCell align="center">Currency Symbol</TableCell>
                        <TableCell align="center">Currency Id</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                {!isLoading && <TableBody>
                    {this.sortByFavoriteStatus(currList).map((item, index) => <CurrItem
                        key={item.id}
                        removeFavorite={this.removeFavorite}
                        handleFavorite={this.handleFavorite}
                        index={index}
                        item={item}
                        />
                    )}
                </TableBody>}
            </Table>
            {isLoading && <Grid container justify="center">
                <Grid item xs={12} className="progress-container">
                    <CircularProgress/>
                </Grid>
            </Grid>}
        </Paper>
    }
}

const mapStateToProps = state => ({
    currList : selectCurrList(state),
    isLoading : selectIsLoadingCurrList(state),
});

export default connect(mapStateToProps, {fetchCurrList, addFavoriteCurr, removeFavoriteCurr})(CurrList);