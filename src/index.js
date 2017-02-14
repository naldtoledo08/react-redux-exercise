import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
//import Store from './store';


import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
	visibility_filter : 'show_all', points : 10, memory_minutes : []
}

const store = createStore(rootReducer, initialState);
//const store = Store();


ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);

