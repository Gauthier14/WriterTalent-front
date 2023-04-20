/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import Loader from "../Loader/Loader";
import BookElement from "../BookElement/BookElement";
import "./PageList.scss";

function PageList({ posts }) {
  return (
    <main className="page-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BookElement key={post.id} {...post} link={`/post/${post.id}`} />
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
