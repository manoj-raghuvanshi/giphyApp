import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServiceWorker from './serviceWorker';
import {isMobile} from "./utils";

const consoleStyle = [
    'background: green',
    'color: white',
    'display: block'
].join(';');

ReactDOM.render(<App/>, document.getElementById('app'));
console.log(`%c Giphy app is running in ${process.env.NODE_ENV} environment`, consoleStyle);
if (process.env.NODE_ENV === 'development') {
    module.hot.accept();
    ServiceWorker();
} else {
    //enable in prod
    // ServiceWorker();
//    move serviceworker() here in prod
}
