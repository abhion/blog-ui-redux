import React from 'react';
import { connect } from 'react-redux';


function PostList(props){
    const posts = props.posts;
    return (
        <div>
            {posts ? posts : 'loading posts'}
        </div>
    );
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostList)