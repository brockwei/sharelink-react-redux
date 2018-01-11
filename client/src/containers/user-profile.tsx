import * as React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AddLink from './add-link';
import LinksList from './links-list';
import SearchLink from './search-link';

import UserInfo from '../containers/user-info';
// class UserProfile extends React.Component {
const UserProfile = () => {
    return (
        <div className="app-container">
            <div>
                <div className="profile-container">
                    <UserInfo />
                    <Link to="/">Links</Link>{' '}
                    <Link to="/addlink">Add Link</Link>
                </div>
            </div>
            {/* <div> */}
                <div className="links-container">
                    <Switch>
                        <Route 
                            exact={true} 
                            path="/" 
                            component={
                            () => <div>
                                    {/* <input className="search-field" type="text" placeholder="Search Links" /> */}
                                    <SearchLink />
                                    <ul><LinksList /></ul>
                                  </div>
                            } 
                        />
                        <Route exact={true} path="/addlink" component={AddLink} />
                        {/* <Route /> */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            {/* </div> */}
        </div>
    );
};

export default UserProfile;

// const profilePic = require('../images/profilepic.jpg');
// // Models;
// const UserInfo = {
//     profilePic: profilePic,
//     username: 'King of JS',
//     favLinks: 420,
//     sharedLinks: 69
// };