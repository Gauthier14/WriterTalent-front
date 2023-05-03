/* eslint-disable quotes */

export const initialState = {
  loaded: false,
  userPublishedPosts: [],
  userSavedPosts: [],
  userAwaitingPosts: [],
  userFavoritePosts: [],
  userReadLaterPosts: [],
  publishedPostsPerGenre: [],
  publishedPostsPerCategory: [],
  recentPublishedPosts: [],
  mostLikedPosts: [],
  randomPost: {},
  postToRead: { content: '{"article en chargement"}' },
  postToEdit: {},
  numberOfPublishedPosts: 0,
  infosPostToReadStatus: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_ALL_USER_PUBLISHED_POSTS_IN_STATE':
      return {
        ...state,
        userPublishedPosts: action.posts,
      };
    case 'SET_ALL_FAVORITE_USER_POSTS_IN_STATE':
      return {
        ...state,
        userFavoritePosts: action.favoritePosts,
      };
    case 'SET_RECENT_POSTS_IN_STATE':
      return {
        ...state,
        recentPublishedPosts: action.recentPosts,
      };
    case 'SET_ALL_SAVED_USER_POSTS_IN_STATE':
      return {
        ...state,
        userSavedPosts: action.savedPosts,
      };
    case 'SET_ALL_AWAITING_USER_POSTS_IN_STATE':
      return {
        ...state,
        userAwaitingPosts: action.awaitingPosts,
      };
    case 'SET_ALL_READ_LATER_USER_POSTS_IN_STATE':
      return {
        ...state,
        userReadLaterPosts: action.readLaterPosts,
      };
    case 'SET_ALL_POSTS_PER_GENRE_IN_STATE':
      return {
        ...state,
        publishedPostsPerGenre: action.postsPerGenre,
      };
    case 'SET_ALL_POSTS_PER_CATEGORY_IN_STATE':
      return {
        ...state,
        publishedPostsPerCategory: action.postsPerCategory,
      };
    case 'SET_ALL_MOST_LIKED_POSTS_IN_STATE':
      return {
        ...state,
        mostLikedPosts: action.likedPosts,
      };
    case 'SET_RANDOM_POST_IN_STATE':
      return {
        ...state,
        randomPost: action.random,
      };
    case 'SET_READ_POST_IN_STATE':
      return {
        ...state,
        postToRead: action.newPost,
      };
    case 'SET_POST_LOADED':
      return {
        ...state,
        loaded: action.status,
      };
    case 'SET_INFOS_READ_POST_STATUS':
      return {
        ...state,
        infosPostToReadStatus: action.readPostStatusInfos,
      };

    case 'SET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR_IN_STATE':
      return {
        ...state,
        numberOfPublishedPosts: action.numberPosts,
      };

    default:
      return state;
  }
};

export default reducer;
