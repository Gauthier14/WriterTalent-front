/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import "./PageList.scss";
import BookElement from "../BookElement/BookElement";

function PageList({ posts = [], authors = [] }) {
  return (
    <main className="page-list">
      {posts.map((post) => (
        <BookElement {...post} />
      ))}
      {authors.map((author) => (
        <BookElement {...author} />
      ))}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
