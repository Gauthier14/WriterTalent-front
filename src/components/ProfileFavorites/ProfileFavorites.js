import { Link } from "react-router-dom";
import {
  BsBalloonHeartFill,
  BsFillHandThumbsUpFill,
  BsEyeFill,
} from "react-icons/bs";
import { FcReading } from "react-icons/fc"; // read
import { ImCross } from "react-icons/im";

import "./ProfileFavorites.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavoriteUserPostsFromApi } from "../../actions/posts";

function ProfileFavorites() {
  const dispatch = useDispatch();
  const favoritePosts = useSelector((state) => state.posts.userFavoritePosts);
  useEffect(() => {
    dispatch(getAllFavoriteUserPostsFromApi());
  }, []);
  return (
    <section className="favorites-scripts">
      <h1>Mes coups de coeur</h1>
      {favoritePosts.length > 0 ? (
        <div className="all-favorites-scripts">
          <div className="my-favorites-scripts">
            <BsBalloonHeartFill size={40} />
            <ul>
              {favoritePosts.map((post) => (
                <li key={post.id}>
                  <div className="delete-btn">
                    <ImCross className="delete-icon" size={30} />
                  </div>
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
        </div>
      ) : (
        <p>Vous n'avez pas de favoris</p>
      )}
    </section>
  );
}
export default ProfileFavorites;
