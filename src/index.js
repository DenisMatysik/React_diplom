import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Diplom from './Diplom';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Diplom />
  </Router>,
  document.getElementById('root')
);


