/* eslint-disable comma-dangle */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import PageList from "../PageList/PageList";
import { getAllUserPublishedPostsFromApi } from "../../actions/posts";

function AuthorPosts() {
  const dispatch = useDispatch();
  const postsAuthor = useSelector((state) => state.posts.userPublishedPosts);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllUserPublishedPostsFromApi(id));
  }, [id]);
  return <PageList posts={postsAuthor} />;
}

export default AuthorPosts;
