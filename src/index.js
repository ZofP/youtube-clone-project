import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Router basename="/youtube-clone-project">

      {/* redux */}
      <Provider store={store}>
        <App />
      </Provider>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


