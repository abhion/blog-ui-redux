import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostList from './PostList';

class UserShow extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
        this.posts = [];
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(user => {
                axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
                    .then(response => {
                        // console.log(response.data)
                        this.posts = response.data;
                        this.setState({ user: user.data })
                    })
                
            })
    }
    render() {
        const user = this.state.user;

        return (
            <div>
                <h2>Name: {user.name}</h2>
                <h3>Posts</h3>
                <PostList posts={this.posts}/>
            </div>
        );
    }
}


export default (UserShow);