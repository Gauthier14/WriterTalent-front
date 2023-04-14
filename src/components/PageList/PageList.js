import PropTypes, { object } from "prop-types";
import "./PageList.scss";
import BookElement from "../BookElement/BookElement";

function PageList({ posts }) {
  return (
    <main className="page-list">
      {posts.map((post) => (
        <BookElement {...post} />
      ))}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object).isRequired,
};

export default PageList;
