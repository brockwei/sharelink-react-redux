import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../containers/App';
// import AddLink from '../containers/add-link';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
            {/* <Route path="/addlink" component={AddLink} /> */}
            {/* <Route 
                render={ function () {
                    return <p>Not Found</p>;
            }} 
            /> */}
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default routes;