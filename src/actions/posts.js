/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const GET_ALL_USER_PUBLISHED_POSTS_FROM_API =
  "GET_ALL_USER_PUBLISHED_POSTS_FROM_API";
export const SET_ALL_USER_PUBLISHED_POSTS_IN_STATE =
  "SET_ALL_USER_PUBLISHED_POSTS_IN_STATE";

export const GET_ALL_READ_LATER_USER_POSTS_FROM_API =
  "GET_READ_LATER__ALL_POSTS_FROM_API";
export const SET_ALL_READ_LATER_USER_POSTS_IN_STATE =
  "SET_ALL_READ_LATER_USER_POSTS_IN_STATE";

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

export const GET_ALL_MOST_LIKED_POSTS_FROM_API =
  "GET_ALL_MOST_LIKED_POSTS_FROM_API";
export const SET_ALL_MOST_LIKED_POSTS_IN_STATE =
  "SET_ALL_MOST_LIKED_POSTS_IN_STATE";

export const GET_RANDOM_POST_FROM_API = "GET_RANDOM_POST_FROM_API";
export const SET_RANDOM_POST_IN_STATE = "SET_RANDOM_POST_IN_STATE";

// actions for posts classed per genre or category
export const GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API =
  "GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API";
export const SET_ALL_POSTS_PER_GENRE_IN_STATE =
  "SET_ALL_POSTS_PER_GENRE_IN_STATE";
export const SET_ALL_POSTS_PER_CATEGORY_IN_STATE =
  "SET_ALL_POSTS_PER_CATEGORY_IN_STATE";

export const GET_ALL_AWAITING_USER_POSTS_FROM_API =
  "GET_ALL_AWAITING_USER_POSTS_FROM_API";
export const SET_ALL_AWAITING_USER_POSTS_IN_STATE =
  "SET_ALL_AWAITING_USER_POSTS_IN_STATE";

export const GET_READ_POST_FROM_API = "GET_READ_POST_FROM_API";
export const SET_READ_POST_IN_STATE = "SET_READ_POST_IN_STATE";

export const SET_POST_LOADED = "SET_POST_LOADED";

export const GET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR =
  "GET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR";
export const SET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR_IN_STATE =
  "SET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR_IN_STATE";


// actions creators ---
// actions for published posts of one user
export const getAllUserPublishedPostsFromApi = (userId) => ({
  type: GET_ALL_USER_PUBLISHED_POSTS_FROM_API,
  userId: userId,
});
/**
 * @param {Array} Posts - List of all user published posts
 */
export const setAllUserPublishedPostsInState = (postList) => ({
  type: SET_ALL_USER_PUBLISHED_POSTS_IN_STATE,
  posts: postList,
});

// actions for published posts of one user
export const getAllAwaitingUserPostsFromApi = (userId) => ({
  type: GET_ALL_AWAITING_USER_POSTS_FROM_API,
  userId: userId,
});
/**
 * @param {Array} Posts - List of all user published posts
 */
export const setAllAwaitingUserPostsInState = (postList) => ({
  type: SET_ALL_AWAITING_USER_POSTS_IN_STATE,
  awaitingPosts: postList,
});

// actions for recent posts
export const getRecentPostsFromApi = () => ({
  type: GET_RECENT_POSTS_FROM_API,
});
/**
 * @param {Array} Posts - List of all recent posts
 */
export const setRecentPostsInState = (recentPosts) => ({
  type: SET_RECENT_POSTS_IN_STATE,
  recentPosts: recentPosts,
});
// actions for recent posts
export const getAllSavedUserPostsFromApi = (userId) => ({
  type: GET_ALL_SAVED_USER_POSTS_FROM_API,
  userId: userId,
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
// actions for favorite posts
export const getAllReadLaterUserPostsFromApi = () => ({
  type: GET_ALL_READ_LATER_USER_POSTS_FROM_API,
});
/**
 * @param {Array} Posts - List of posts to read later
 */
export const setAllReadLaterUserPostsInState = (readLaterPosts) => ({
  type: SET_ALL_READ_LATER_USER_POSTS_IN_STATE,
  readLaterPosts: readLaterPosts,
});

// actions for favorite posts
export const getAllFavoriteUserPostsFromApi = () => ({
  type: GET_ALL_FAVORITE_USER_POSTS_FROM_API,
});
/**
 * @param {Array} Posts - List of user favorites posts
 */
export const setAllFavoriteUserPostsInState = (favoritePosts) => ({
  type: SET_ALL_FAVORITE_USER_POSTS_IN_STATE,
  favoritePosts: favoritePosts,
});

// actions for posts per genre or category
export const getAllPostsPerCategoryOrGenreFromApi = (param, Id) => ({
  type: GET_ALL_POSTS_PER_CATEGORY_OR_GENRE_FROM_API,
  id: Id,
  param: param,
});

/**
 * @param {Array} Posts - List of of posts per genre
 */
export const setAllPostsPerGenreInState = (postsPerGenre) => ({
  type: SET_ALL_POSTS_PER_GENRE_IN_STATE,
  postsPerGenre: postsPerGenre,
});

// actions for all most liked posts
export const getAllMostLikedPostsFromApi = () => ({
  type: GET_ALL_MOST_LIKED_POSTS_FROM_API,
});

/**
 * @param {Array} Posts - List of of most liked posts
 */
export const setAllMostLikedPostsInState = (likedPosts) => ({
  type: SET_ALL_MOST_LIKED_POSTS_IN_STATE,
  likedPosts: likedPosts,
});

// actions for random post
export const getRandomPostFromApi = () => ({
  type: GET_RANDOM_POST_FROM_API,
});

/**
 * @param {Object} Posts - Post generated by random method
 */
export const setandomPostInState = (random) => ({
  type: SET_RANDOM_POST_IN_STATE,
  random: random,
});

/**
 * @param {Array} Posts - List of posts from one category
 */
export const setAllPostsPerCategoryInState = (postsPerCategory) => ({
  type: SET_ALL_POSTS_PER_CATEGORY_IN_STATE,
  postsPerCategory: postsPerCategory,
});

// actions for one post
export const getReadPostFromApi = (postId) => ({
  type: GET_READ_POST_FROM_API,
  postId: postId,
});

/**
 * @param {Object} Posts - Post generated by random method
 */
export const setReadPostInState = (newPost) => ({
  type: SET_READ_POST_IN_STATE,
  newPost: newPost,
});

/**
 * @param {Array} reviews 
 */

export const setPostLoaded = (reviews) => ({
  type: SET_POST_LOADED,
});


export const getNumberOfPublishedPostsAuthorFromApi = (userId) => ({
  type: GET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR,
  userId: userId,
});

export const setNumberOfPublishedPostsAuthorInState = (numberPosts) => ({
  type: SET_NUMBER_OF_PUBLISHED_POSTS_AUTHOR_IN_STATE,
  numberPosts: numberPosts,
});
