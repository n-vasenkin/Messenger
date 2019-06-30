import React from 'react';
import ReactDOM from 'react-dom';
import './Static/css/index.css';
import App from './App';

/* Redux */
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Lib/Store/Reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));