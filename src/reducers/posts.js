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
  mostLikedPosts: [],
  randomPost: {},
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
        recentPublishedPosts: [...action.recentPosts],
      };
    case "SET_ALL_USER_SAVED_POSTS_IN_STATE":
      return {
        ...state,
        userSavedPosts: [...action.savedPosts],
      };
    case "SET_ALL_READ_LATER_USER_POSTS_IN_STATE":
      return {
        ...state,
        userReadLaterPosts: [...action.readLaterPosts],
      };
    case "SET_ALL_POSTS_PER_GENRE_IN_STATE":
      return {
        ...state,
        publishedPostsPerGenre: [...action.postsPerGenre],
      };
    case "SET_ALL_POSTS_PER_CATEGORY_IN_STATE":
      return {
        ...state,
        publishedPostsPerGenre: [...action.postsPerCategory],
      };
    case "SET_ALL_MOST_LIKED_POSTS_IN_STATE":
      return {
        ...state,
        mostLikedPosts: [...action.likedPosts],
      };
    case "SET_RANDOM_POST_IN_STATE":
      return {
        ...state,
        randomPost: [...action.random],
      };
    default:
      return state;
  }
};

export default reducer;
