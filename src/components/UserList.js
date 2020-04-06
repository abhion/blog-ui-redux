import React from 'react';
import { connect } from 'react-redux';


 function UserList(props){
    let users = props.users;
    if(users && users.length){
        users = users.map(user => <li key={user.id}>{user.name}</li>)
    }
    console.log(users)
    return (
        <div>
            {users}
        </div>
    );
}

function mapStateToProps(state){
    console.log(state, "STATE")
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList)