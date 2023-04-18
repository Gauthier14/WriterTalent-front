/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getAllPostsPerCategoryOrGenreFromApi } from "../../actions/posts";
import BookElement from "../BookElement/BookElement";
// import AuthorItem from "../Authors/Authors";
import "./PageList.scss";

function PageList() {
  const { id, param } = useParams();
  const dispatch = useDispatch();
  const postsGenre = useSelector((state) => state.posts.publishedPostsPerGenre);
  const postsCategory = useSelector(
    (state) => state.posts.publishedPostsPerCategory
  );

  useEffect(() => {
    dispatch(getAllPostsPerCategoryOrGenreFromApi(param, id));
  });
  return (
    <main className="page-list">
      {postsGenre.map((post) => (
        <BookElement {...post} link={`/post/${post.id}`} />
      ))}
      {postsCategory.map((post) => (
        <BookElement {...post} link={`/post/${post.id}`} />
      ))}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
