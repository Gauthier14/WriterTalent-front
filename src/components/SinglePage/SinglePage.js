import PropTypes from 'prop-types';
import './SinglePage.scss';

function SinglePage({ children }) {
  return <main className="single-page">{children}</main>;
}

SinglePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SinglePage;
