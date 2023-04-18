/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_ALL_USER_PUBLISHED_POSTS_FROM_API =
  "GET_ALL_PUBLISHED_POSTS_FROM_API";
export const SET_ALL_USER_PUBLISHED_POSTS_IN_STATE =
  "SET_ALL_PUBLISHED_POSTS_IN_STATE";

export const GET_ALL_READ_LATER_USER_POSTS_FROM_API =
  "GET_READ_LATER__ALL_POSTS_FROM_API";
export const SET_ALL_READ_LATER_USER_POSTS_IN_STATE =
  "SET_READ_LATER_ALL_POSTS_IN_STATE";

export const GET_RECENT_POSTS_FROM_API = "GET_RECENT_POSTS_FROM_API";
export const SET_RECENT_POSTS_IN_STATE = "SET_RECENT_POSTS_IN_STATE";

export const GET_ALL_SAVED_USER_POSTS_FROM_API =
  "GET_ALL_SAVED_USER_POSTS_FROM_API";
export const SET_ALL_SAVED_USER_POSTS_IN_STATE =
  "SET_ALL_SAVED_USER_POSTS_IN_STATE";

export const GET_ALL_FAVORITE_USER_POSTS_FROM_API =
  "GET_ALL_FAVORITE_USER_POSTS_FROM_API";
export const SET_ALL_FAVORITE_USER_POSTS_IN_STATE =
  "SET_ALL_FAVORITE_USER_POSTS_IN_STATE";

export const GET_ALL_POSTS_PER_GENRE_FROM_API =
  "GET_ALL_POSTS_PER_GENRE_FROM_API";
export const SET_ALL_POSTS_PER_GENRE_IN_STATE =
  "SET_ALL_POSTS_PER_GENRE_IN_STATE";

export const GET_ALL_POSTS_PER_CATEGORY_FROM_API =
  "GET_ALL_POSTS_PER_CATEGORY_FROM_API";
export const SET_ALL_POSTS_PER_CATEGORY_IN_STATE =
  "SET_ALL_POSTS_PER_CATEGORY_IN_STATE";

// actions creators ---
// actions for saved posts
/**
 * @param {Array} Posts - List of all user published posts
 */
export const setAllUserPublishedPostsInState = (postList) => ({
  type: SET_ALL_USER_PUBLISHED_POSTS_IN_STATE,
  posts: postList,
});

// actions for recent posts
/**
 * @param {Array} Posts - List of all recent posts
 */
export const setRecentPostsInState = (recentPosts) => ({
  type: SET_RECENT_POSTS_IN_STATE,
  recentPosts: recentPosts,
});

// actions for saved posts
/**
 * @param {Array} Posts - List of user saved posts
 */
export const setAllSavedUserPostsInState = (savedPosts) => ({
  type: SET_ALL_SAVED_USER_POSTS_IN_STATE,
  savedPosts: savedPosts,
});

// actions for read later posts
/**
 * @param {Array} Posts - List of posts to read later
 */
export const setAllReadLaterUserPostsInState = (readLaterPosts) => ({
  type: SET_ALL_READ_LATER_USER_POSTS_IN_STATE,
  readLaterPosts: readLaterPosts,
});

// actions for favorite posts
/**
 * @param {Array} Posts - List of user favorites posts
 */
export const setAllFavoriteUserPostsInState = (favoritePosts) => ({
  type: SET_ALL_FAVORITE_USER_POSTS_IN_STATE,
  favoritePosts: favoritePosts,
});

// actions for posts per genre
export const getAllPostsPerGenreFromApi = (genreId) => ({
  type: GET_ALL_POSTS_PER_GENRE_FROM_API,
  genreId: genreId,
});

/**
 * @param {Array} Posts - List of of posts per genre
 */
export const setAllPostsPerGenreInState = (postsPerGenre) => ({
  type: SET_ALL_POSTS_PER_GENRE_IN_STATE,
  postsPerGenre: postsPerGenre,
});

// actions for posts per category
export const getAllPostsPerCategoryFromApi = (categoryId) => ({
  type: GET_ALL_POSTS_PER_CATEGORY_FROM_API,
  categoryId: categoryId,
});
/**
 * @param {Array} Posts - List of user saved posts
 */
export const setAllPostsPerCategoryInState = (postsPerCategory) => ({
  type: SET_ALL_POSTS_PER_CATEGORY_IN_STATE,
  postsPerCategory: postsPerCategory,
});
