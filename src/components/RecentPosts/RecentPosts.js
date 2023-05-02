import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PageList from '../PageList/PageList';
import { getRecentPostsFromApi } from '../../actions/posts';

function RecentPosts() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.posts.recentPublishedPosts);
  useEffect(() => {
    dispatch(getRecentPostsFromApi());
  }, []);
  return <PageList posts={recentPosts} />;
}

export default RecentPosts;
