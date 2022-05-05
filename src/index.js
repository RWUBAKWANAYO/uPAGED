import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import store from './store';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
