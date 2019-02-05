import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocalStorageDataProvider from './localStorageDataProvider';

const localStorageDataProvider = new LocalStorageDataProvider();

ReactDOM.render(<App dataProvider={localStorageDataProvider} />, document.getElementById('root'));
