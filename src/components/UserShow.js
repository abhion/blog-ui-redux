import React from 'react';
import  { connect } from 'react-redux';

function UserShow(props){
    const userId = props.match.params.id;
    console.log(userId, "USER")

    return (
            <div>
            <h2>Name: {}</h2>
            <h3>Posts</h3>
                <ul>
                    {userId}
                </ul>
            </div>
        );
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserShow);