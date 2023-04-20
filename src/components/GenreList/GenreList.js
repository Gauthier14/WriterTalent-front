import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import PageList from "../PageList/PageList";
import { getAllPostsPerCategoryOrGenreFromApi } from "../../actions/posts";

function GenreList() {
  const dispatch = useDispatch();
  const postsGenre = useSelector((state) => state.posts.publishedPostsPerGenre);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllPostsPerCategoryOrGenreFromApi("genre", id));
  }, []);
  return <PageList posts={postsGenre} />;
}

export default GenreList;
