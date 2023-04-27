import { Link } from "react-router-dom";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
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
  }, []);
  return (
    <section className="later-scripts">
      <h1>Je lirais bien...</h1>
      <div className="all-later-scripts">
        <div className="my-later-scripts">
          <MdWatchLater size={40} />
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
    </section>
  );
}
export default ReadLaterPosts;
