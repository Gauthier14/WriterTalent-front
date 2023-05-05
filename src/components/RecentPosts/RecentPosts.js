import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PageList from '../PageList/PageList';
import { getRecentPostsFromApi } from '../../actions/posts';
import NewLoader from '../NewLoader/NewLoader';

function RecentPosts() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.posts.recentPublishedPosts);
  useEffect(() => {
    dispatch(getRecentPostsFromApi());
  }, []);
  return recentPosts !== {} ? (
    <PageList posts={recentPosts} />
  ) : (
    <div>
      <NewLoader />
    </div>
  );
}

export default RecentPosts;
