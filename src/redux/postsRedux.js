//selectors
export const getPosts = () => (statePart) => statePart.posts;
export const getPostId = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default postsReducer;
