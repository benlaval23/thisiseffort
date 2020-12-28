import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Enterroom from './components/Enterroom/Enterroom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode >
    <h1>thisiseffort.io</h1>
    <Router>
      <Route path="/" exact component={Enterroom} />
      <Route path="/room/:roomName" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
