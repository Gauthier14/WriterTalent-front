/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
// import Loader from "../Loader/Loader";
import BookElement from "../BookElement/BookElement";
// import AuthorItem from "../Authors/Authors";
import "./PageList.scss";
import MessageEmptyResults from "../MessageEmptyResults/MessageEmptyResults";

function PageList() {
  const { id, param } = useParams();
  console.log(`${param}/${id}`);
  const postsGenre = useSelector((state) => state.posts.publishedPostsPerGenre);
  const postsCategory = useSelector(
    (state) => state.posts.publishedPostsPerCategory
  );
  let posts = [];
  if (postsCategory.length > 0) {
    posts = postsCategory;
  } else if (postsGenre.length > 0) {
    posts = postsGenre;
  }
  return (
    <main className="page-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <BookElement key={post.id} {...post} link={`/post/${post.id}`} />
        ))
      ) : (
        <MessageEmptyResults />
      )}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
