import { Link } from "react-router-dom";
import {
  BsBalloonHeartFill,
  BsFillHandThumbsUpFill,
  BsEyeFill,
} from "react-icons/bs";
import { FcReading } from "react-icons/fc"; // read

import "./ReadLaterPosts.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReadLaterUserPostsFromApi } from "../../actions/posts";

function ReadLaterPosts() {
  const dispatch = useDispatch();
  const readLaterPosts = useSelector((state) => state.posts.userReadLaterPosts);
  useEffect(() => {
    dispatch(getAllReadLaterUserPostsFromApi(localStorage.getItem("user_id")));
  });
  return (
    <section className="favorites-scripts">
      <h1>Mes coups de coeur</h1>
      <div className="all-favorites-scripts">
        <div className="my-favorites-scripts">
          <BsBalloonHeartFill size={40} />
          <ul>
            {readLaterPosts.map((post) => (
              <li>
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
                    {post.nbViews}
                  </span>
                </div>
                {post.categories.map((category) => (
                  <span className="category" key={category.id}>
                    {category.name}
                  </span>
                ))}
                {post.genres.map((genre) => (
                  <span className="genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ReadLaterPosts;
