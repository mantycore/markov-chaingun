import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import rootEpic from './epics';
import 'rxjs';

let store = createStore(
	reducer,
	applyMiddleware(
		createEpicMiddleware(rootEpic)
		)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
