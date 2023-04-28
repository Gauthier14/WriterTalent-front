import { Link } from "react-router-dom";
import { MdPublishedWithChanges } from "react-icons/md"; // published
import { GrInProgress } from "react-icons/gr"; // awaiting
import { RiDraftFill } from "react-icons/ri"; // draft
// import { FaPenNib } from "react-icons/fa"; // write
import { FcReading } from "react-icons/fc"; // read
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAwaitingUserPostsFromApi,
  getAllSavedUserPostsFromApi,
  getAllUserPublishedPostsFromApi,
} from "../../actions/posts";

import "./ProfileScripts.scss";
import { manageLocalStorage } from "../../selectors/user";

function ProfileScripts() {
  const dispatch = useDispatch();
  const userId = Number(manageLocalStorage("get", "user_id"));
  const publishedPosts = useSelector((state) => state.posts.userPublishedPosts);
  const savedPosts = useSelector((state) => state.posts.userSavedPosts);
  const awatingPosts = useSelector((state) => state.posts.userAwaitingPosts);
  useEffect(() => {
    dispatch(getAllUserPublishedPostsFromApi(userId));
  }, []);
  useEffect(() => {
    dispatch(getAllSavedUserPostsFromApi(userId));
  }, []);
  useEffect(() => {
    dispatch(getAllAwaitingUserPostsFromApi(userId));
  }, []);
  return (
    <section className="profile-scripts">
      <h1>Mes écrits</h1>
      <div className="all-scripts">
        <div className="published-scripts">
          <MdPublishedWithChanges size={40} />
          <h2> Mes écrits publiés</h2>
          <ul>
            {publishedPosts.map((post) => (
              <li key={post.id}>
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
        <div className="awating-scripts">
          <GrInProgress size={40} />
          <h2>Mes écrits soumis</h2>
          <ul>
            {awatingPosts.map((post) => (
              <li key={post.id}>
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
        <div className="draft-scripts">
          <RiDraftFill size={40} />
          <h2>En cours d'écriture</h2>
          <ul>
            {savedPosts.map((post) => (
              <li key={post.id}>
                <Link to={`/edit/${post.id}`}>
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
      </div>
    </section>
  );
}

export default ProfileScripts;
