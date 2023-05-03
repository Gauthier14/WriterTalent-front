import { Link } from 'react-router-dom';
import { BsBalloonHeartFill, BsFillHandThumbsUpFill, BsEyeFill } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';
import { FcReading } from 'react-icons/fc'; // read
import { ImCross } from 'react-icons/im';

import './ProfileReads.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllFavoriteUserPostsFromApi,
  getAllReadLaterUserPostsFromApi,
  removeUserPost,
} from '../../actions/posts';

function ProfileReads() {
  const dispatch = useDispatch();
  const readLaterPosts = useSelector((state) => state.posts.userReadLaterPosts);
  const favoritePosts = useSelector((state) => state.posts.userFavoritePosts);
  useEffect(() => {
    dispatch(getAllReadLaterUserPostsFromApi(localStorage.getItem('user_id')));
  }, []);
  useEffect(() => {
    dispatch(getAllFavoriteUserPostsFromApi());
  }, []);
  return (
    <section className="read-scripts">
      <div className="all-favorites-scripts">
        <h1>Je lirais bien...</h1>
        {favoritePosts.length > 0 ? (
          <div className="my-favorites-scripts">
            <h2>Mes coups de coeur</h2>
            <BsBalloonHeartFill size={40} />
            <ul>
              {favoritePosts.map((post) => (
                <li key={post.id}>
                  <ImCross
                    className="delete-icon"
                    size={30}
                    style={{
                      backgroundColor: 'red',
                      padding: '0.5em',
                      color: '#fff',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(removeUserPost(post.id, 'favorites'))}
                  />

                  <Link to={`/post/read/${post.id}`}>
                    <h3>
                      {post.title} <FcReading size={30} />
                    </h3>
                  </Link>
                  <div className="views-likes">
                    <span className="nbLikes">
                      <BsFillHandThumbsUpFill />
                      {post.nbLikes}
                    </span>
                    <span className="nbViews">
                      <BsEyeFill />
                      {post.nbViews}
                    </span>
                  </div>
                  <span className="genre" key={post.genre.id}>
                    {post.genre.name}
                  </span>
                  {post.categories.map((category) => (
                    <span className="category" key={category.id}>
                      {category.name}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Vous n'avez pas de favoris</p>
        )}
      </div>
      <div className="all-later-scripts">
        {readLaterPosts.length > 0 ? (
          <div className="my-later-scripts">
            <h2>Peut être plus tard !!!</h2>
            <MdWatchLater size={40} />
            <ul>
              {readLaterPosts.map((post) => (
                <li>
                  <ImCross
                    className="delete-icon"
                    size={30}
                    style={{
                      backgroundColor: 'red',
                      padding: '0.5em',
                      color: '#fff',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(removeUserPost(post.id, 'toread'))}
                  />
                  <Link to={`/post/read/${post.id}`}>
                    <h3>
                      {post.title} <FcReading size={30} />
                    </h3>
                  </Link>
                  <div className="views-likes">
                    <span className="nbViews">
                      <BsFillHandThumbsUpFill />
                      {post.nbViews}
                    </span>
                    <span className="nbLikes">
                      <BsEyeFill />
                      {post.nbLikes}
                    </span>
                  </div>
                  <span className="genre" key={post.genre.id}>
                    {post.genre.name}
                  </span>
                  {post.categories.map((category) => (
                    <span className="category" key={category.id}>
                      {category.name}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Vous n'avez pas d'écrit à lire plus tard</p>
        )}
      </div>
    </section>
  );
}
export default ProfileReads;
