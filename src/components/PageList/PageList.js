/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { useSelector } from "react-redux";
import PropTypes, { object } from "prop-types";
import NewLoader from "../NewLoader/NewLoader";
import BookElement from "../BookElement/BookElement";
import "./PageList.scss";

function PageList({ posts }) {
  return (
    <main className="page-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BookElement key={post.id} {...post} link={`/post/read/${post.id}`} />
        ))
      ) : (
        <NewLoader />
      )}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
