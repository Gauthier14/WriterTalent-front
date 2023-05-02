import PropTypes from 'prop-types';
import NewLoader from '../NewLoader/NewLoader';
import BookElement from '../BookElement/BookElement';
import './PageList.scss';

function PageList({ posts }) {
  return (
    <main className="page-list">
      {posts.length > 0 ? (
        posts.map((post) => <BookElement key={post.id} {...post} link={`/post/read/${post.id}`} />)
      ) : (
        <NewLoader />
      )}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PageList;
