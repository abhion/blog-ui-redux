export const postsReducer = (posts = [], action) => {
    switch (action.type) {

        case 'SET_POSTS': {
            return [...posts, action.payload];
        }
        default:
            return posts;
    }
}