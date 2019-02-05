import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LocalStorageDataProvider from './localStorageDataProvider';

const localStorageDataProvider = new LocalStorageDataProvider();

ReactDOM.render(<App dataProvider={localStorageDataProvider} />, document.getElementById('root'));
