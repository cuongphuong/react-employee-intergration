import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import 'bootstrap/dist/js/bootstrap.js';

var { Provider } = require('react-redux');
var store = require('./store');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
