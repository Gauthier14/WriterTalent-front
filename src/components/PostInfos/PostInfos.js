/* eslint-disable react/jsx-curly-newline */
/* eslint-disable brace-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import "./PostInfos.scss";
import { useDispatch } from "react-redux"; // Import de useDispatch
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillRead, AiOutlineClockCircle } from "react-icons/ai";

import {
  addPostToFavoriteList,
  addPostToReadLaterList,
  likePost,
} from "../../actions/viewer";

function PostInfos({ postId, nbLikes, nbViews }) {
  const dispatch = useDispatch(); 

  return (
    <div className="post-infos">
      <span onClick={() => dispatch(likePost(postId))}>
        <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
        {nbLikes}
      </span>
      <span>
        <BsEyeFill style={{ marginRight: "0.5em" }} />
        {nbViews}
      </span>
      <span
        className="read-later-container"
        onClick={() => dispatch(addPostToReadLaterList(postId))}
      >
        <AiFillRead size={30} />
        <AiOutlineClockCircle size={20} />
      </span>
      <MdFavoriteBorder
        size={30}
        color="#"
        onClick={() => dispatch(addPostToFavoriteList(postId))}
      />
    </div>
  );
}

export default PostInfos;
