/* eslint-disable comma-dangle */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import PageList from "../PageList/PageList";
import { getAllPostsOfOneAuthor } from "../../actions/posts";

function AuthorPosts() {
  const dispatch = useDispatch();
  const postsAuthor = useSelector(
    (state) => state.posts.publishedPostsPerCategory
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllPostsOfOneAuthor(id));
  }, [id]);
  return <PageList posts={postsAuthor} />;
}

export default AuthorPosts;
