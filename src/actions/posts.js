/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_ALL_USER_PUBLISHED_POSTS_FROM_API =
  "GET_ALL_PUBLISHED_POSTS_FROM_API";
export const SET_ALL_USER_PUBLISHED_POSTS_IN_STATE =
  "SET_ALL_PUBLISHED_POSTS_IN_STATE";
export const GET_RECENT_POSTS_FROM_API = "GET_RECENT_POSTS_FROM_API";
export const SET_RECENT_POSTS_IN_STATE = "SET_RECENT_POSTS_IN_STATE";

export const GET_ALL_USER_POSTS_FROM_API = "GET_ALL_USER_POSTS_FROM_API";
export const SET_ALL_USER_POSTS_IN_STATE = "SET_ALL_USER_POSTS_IN_STATE";

/*loaded: false,
  userPublishedPosts: [],
  userSavedPosts: [],
  userFavoritePosts: [],
  userReadLaterPosts: [],
  publishedPostsPerGenre: [],
  publishedPostsPerCategory: [],
  recentPublishedPosts: [],*/
// --- action creators ---

export const getAllUserPublishedPostsFromApi = (userId) => ({
  type: GET_ALL_USER_PUBLISHED_POSTS_FROM_API,
  userId: userId,
});
/**
 * @param {Array} Posts - List of All posts
 */
export const setAllUserPublishedPostsInState = (postList) => ({
  type: SET_ALL_USER_PUBLISHED_POSTS_IN_STATE,
  posts: postList,
});

/**
 * @param {Array} Posts - List of user favorites posts
 */
export const setRecentPostsInState = (RecentPosts) => ({
  type: SET_RECENT_POSTS_IN_STATE,
  RecentPosts: RecentPosts,
});
