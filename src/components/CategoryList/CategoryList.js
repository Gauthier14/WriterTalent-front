/* eslint-disable comma-dangle */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import PageList from '../PageList/PageList';
import { getAllPostsPerCategoryOrGenreFromApi } from '../../actions/posts';

function CategoryList() {
  const dispatch = useDispatch();
  const postsCategory = useSelector(
    (state) => state.posts.publishedPostsPerCategory
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllPostsPerCategoryOrGenreFromApi('category', id));
  }, [id]);
  return <PageList posts={postsCategory} />;
}

export default CategoryList;
