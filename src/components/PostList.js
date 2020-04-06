import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';


class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
       if(!this.props.post){
            axios.get(`http://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    // console.log(response.data)
                    this.setState({ posts: response.data });
                })
        }
    }
    render() {
        let posts;
        
        if (this.props.posts) {
            posts = this.props.posts.map(post => {
                return (
                    <li key={post.id}> <Link to={`/post/${post.id}`}>{post.title}</Link> </li>
                );
            })
        } else {
            posts = this.state.posts.map(post => {
                return (
                    <li key={post.id}> <Link to={`/post/${post.id}`}>{post.title} </Link> </li>
                );
            })
        }

        return (
            <div>
                <ul>
                    {posts}
                </ul>
            </div>
        );

    }
}


export default (PostList)