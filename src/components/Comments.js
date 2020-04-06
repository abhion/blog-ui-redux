import React from 'react';
import { connect } from 'react-redux';


function Comments(props){
    const comments = props.comments;
    return (
        <div>
            Comments
        </div>
    );
}

function mapStateToProps(state){
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comments);