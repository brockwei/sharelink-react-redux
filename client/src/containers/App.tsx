import * as React from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';

// import { combineReducers } from 'redux';
import UserProfile from './user-profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserProfile />
        {/* <Link to="/addlink">Add Link</Link>{' '}
        <Link to="/">Links</Link> */}
      </div>
    );
  }
}

export default App;
