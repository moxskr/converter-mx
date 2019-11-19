import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import './index.sass';
import store from './store';
import App from "./components/App";

/* Api key e47734ef9fefb1f53b23
*   https://free.currconv.com/api/v7/currencies?apiKey=e47734ef9fefb1f53b23
* */

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);