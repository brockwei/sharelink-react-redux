import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import store from './reducers';

// import App from './containers/App';
// Routes
import routes from './config/routes';

// Don't touch
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  {/* <Provider> */}
    {/* <App /> */}
    {routes}
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
