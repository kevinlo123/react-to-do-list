import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
