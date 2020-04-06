export const usersReducer = (users = [], action) => {
    switch (action.type) {
        case 'SET_USERS': {
            console.log("s", [...users, action.payload])
            return [...users, action.payload]
        }
            
        default:
            return users;
            
    }
}