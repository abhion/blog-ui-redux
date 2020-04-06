export const commentsReducer = (comments = [], action) => {
    switch (action.type) {
        case 'SET_COMMENTS': {
            return [...comments, action.payload]
        }
            
        default:
            return comments;
            
    }
}