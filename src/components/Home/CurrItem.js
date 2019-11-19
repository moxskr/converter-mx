import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TableRow from "@material-ui/core/TableRow";

function CurrItem ({handleFavorite, removeFavorite, item, index}){
    const handleThisItem = () => {
        if(!item.favor) {
            handleFavorite(item.id);
        }
        else{
            removeFavorite(item.id)
        }
    };
    const classNames = `curr-list-table-row ${!item.favor ? '' : 'favor-row'}`;
    return <TableRow key={item.id} className={classNames}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{item.currencyName}</TableCell>
        <TableCell align="center">{item.currencySymbol ? item.currencySymbol : 'no-info'}</TableCell>
        <TableCell align="center">{item.id}</TableCell>
        <TableCell align="center">
            <Button color={item.favor ? 'secondary' : 'primary'} onClick={handleThisItem}>
                <FavoriteIcon/>
            </Button>
        </TableCell>
    </TableRow>
}

export default CurrItem;