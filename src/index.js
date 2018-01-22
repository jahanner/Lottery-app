import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppRouter from './components/AppRouter.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
