import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PostShow extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        const post = this.props.post;
        console.log(post);
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(res => {
                
                this.setState({ comments: res.data })
            })
    }

    render() {
        const comments = this.state.comments.map(comment => {
           return <li key={comment.id}>{comment.body}</li>
        })
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <h4>Comments</h4>
                <ul>{comments}</ul>
                <Link to={`/user/${this.props.post.userId}`}>More posts</Link>
            </div>
        );

    }
}

function mapStateToProps(state, props) {
    return {
        post: state.posts[0] ? state.posts[0].filter(post => post.id == props.match.params.id)[0] : state.posts,
        comments: state.comments[0] ? state.comments : []
    }
}

export default connect(mapStateToProps)(PostShow)