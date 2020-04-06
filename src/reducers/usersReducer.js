export const usersReducer = (users = [], action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return [...users, action.payload]
        }
            
        default:
            return users;
            
    }
}