export const userReducer = (users = [], action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return [...users, action.payload]
        }
            
        default:
            return users;
            
    }
}