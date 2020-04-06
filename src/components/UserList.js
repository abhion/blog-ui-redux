import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



function UserList(props) {
    let users = props.users;
    console.log(users, "USERs")
    if (users && users.length) {
        users = users.map(user => {
            return (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            )
        })
    }
    return (
        <div>
            {users}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users[0]
    }
}
export default connect(mapStateToProps)(UserList)