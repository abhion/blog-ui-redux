
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserList from './UserList';
import PostList from './PostList';
import UserShow from './UserShow';
import PostShow from './PostShow';

export default function App(props) {

    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home |</Link>
                <Link to="/users"> Users |</Link>
                <Link to="/posts"> Posts</Link>

                {/* <Route path="/" component={App} exact={true} /> */}
                <Route path="/users" component={UserList} exact={true} />
                <Route path="/users/:id" component={UserShow} />
                <Route path="/posts" component={PostList} />
                <Route path="/post/:id" component={PostShow} />
            </div>
        </BrowserRouter>
    );
}