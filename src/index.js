import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "./Store";
import {Provider} from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';

const app = (
	<Provider store={configureStore()}>
		<App />
	</Provider>
)
ReactDOM.render(
      app,
  document.getElementById('root')
);

reportWebVitals();
