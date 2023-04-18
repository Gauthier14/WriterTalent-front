/* eslint-disable quotes */
export const initialState = {
  loaded: false,
  userPublishedPosts: [],
  userSavedPosts: [],
  userFavoritePosts: [],
  userReadLaterPosts: [],
  publishedPostsPerGenre: [],
  publishedPostsPerCategory: [],
  recentPublishedPosts: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_ALL_USER_PUBLISHED_POSTS_IN_STATE":
      return {
        ...state,
        userPublishedPosts: [...action.postList],
        loaded: true,
      };
    case "SET_RECENT_POSTS_IN_STATE":
      return {
        ...state,
        favorites: [...action.favoritePosts],
      };
    case "SET_ALL_PUBLISHED_POSTS_IN_STATE":
      return {
        ...state,
        recentPublishedPosts: [...action.recentPosts],
      };
    default:
      return state;
  }
};

export default reducer;
