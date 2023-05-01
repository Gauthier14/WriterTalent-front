/* eslint-disable react/jsx-curly-newline */
/* eslint-disable brace-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import "./ViewerPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  BsFillHandThumbsUpFill,
  BsEyeFill,
  BsHandThumbsUp,
} from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineRead, AiFillClockCircle } from "react-icons/ai";

import {
  addPostToFavoriteList,
  addPostToReadLaterList,
  changePage,
  getReviewContent,
  likePost,
  sendReview,
  setToggleViewerMenu,
} from "../../actions/viewer";
import { getReadPostFromApi } from "../../actions/posts";
import NewLoader from "../NewLoader/NewLoader";
import { convertDraftToHtml, convertStringDate } from "../../selectors/viewer";
import { setMessageInfosInState } from "../../actions/messages";
import { generateMessages, showMessages } from "../../selectors/message";
import { manageSessionStorage } from "../../selectors/user";

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const currentPage = useSelector((state) => state.viewer.currentPage);
  const reviewText = useSelector((state) => state.viewer.reviewContent);
  const postToRead = useSelector((state) => state.posts.postToRead);
  const loaded = useSelector((state) => state.posts.loaded);
  const PostToReadStatus = useSelector(
    (state) => state.posts.infosPostToReadStatus
  );
  const isLogged = Boolean(manageSessionStorage("get", "logged"));
  const { like, favorite, readLater } = PostToReadStatus;
  const {
    title,
    nbLikes,
    content,
    nbViews,
    user,
    reviews,
    id: postId,
  } = postToRead;

  let reviewsReversed = "";

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReadPostFromApi(id));
  }, [id]);

  const handleClickPage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };
  if (loaded) {
    convertDraftToHtml(content);
    reviewsReversed = reviews.reverse();
  }
  const words = content.split(" ");
  const wordsPerPage = 200;
  const pageCount = Math.ceil(words.length / wordsPerPage);

  return loaded ? (
    <>
      <main className="viewer-body">
        <div className="viewer-header">
          <BiFoodMenu
            size={40}
            className="toggle-menu"
            onClick={() => dispatch(setToggleViewerMenu())}
          />

          <h1 className="viewer-title">{title}</h1>
          <h2>{user.username}</h2>
        </div>
        <aside className={!isVisible ? "sidebar" : "sidebar sidebar-toggled"}>
          <h3>Pages...</h3>
          <nav>
            <ul>
              {Array.from({ length: pageCount }, (_, i) => (
                <li
                  key={i}
                  className={i + 1 === currentPage ? "active" : ""}
                  onClick={() => handleClickPage(i + 1)}
                >
                  Page {i + 1}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className={!isVisible ? "main" : "main main-toggled"}>
          {/* renderedContent(convertDraftToHtml(content), 200, currentPage) */}
          {convertDraftToHtml(content)}
        </section>
      </main>

      <div className="post-infos">
        <span onClick={() => dispatch(likePost(postId))}>
          {like ? (
            <BsFillHandThumbsUpFill
              size={20}
              style={{ marginRight: "0.5em", color: "#f0f" }}
            />
          ) : (
            <BsHandThumbsUp
              size={20}
              style={{ marginRight: "0.5em", color: "#f0f" }}
            />
          )}

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
          {readLater ? (
            <>
              <AiOutlineRead size={20} />
              <AiFillClockCircle size={15} color="green" />
            </>
          ) : (
            <>
              <AiOutlineRead size={20} />
              <AiFillClockCircle size={15} color="#fff" />
            </>
          )}
        </span>
        {favorite ? (
          <MdFavoriteBorder
            size={35}
            color="#f0f"
            onClick={() => dispatch(addPostToFavoriteList(postId))}
          />
        ) : (
          <MdFavorite
            size={35}
            color="#f0f"
            onClick={() => dispatch(addPostToFavoriteList(postId))}
          />
        )}
      </div>
      <section className="reviews">
        <h2>Commentaires</h2>

        {reviewsReversed.length > 0 ? (
          reviewsReversed.map((review) => (
            <div className="review" key={review.id}>
              <div className="review_infos">
                <h3>{review.user.username}</h3>
                <span>{convertStringDate(review.createdAt)}</span>
              </div>
              <p>{review.content}</p>
            </div>
          ))
        ) : (
          <p>Soyez le premier à donner votre avis sur cet écrit !!</p>
        )}
      </section>
      {isLogged ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (reviewText !== "") {
              dispatch(sendReview(postId));
            } else {
              dispatch(
                setMessageInfosInState(generateMessages("review-content-empty"))
              );
              showMessages();
            }
          }}
          className="new-review"
        >
          <fieldset>
            <legend>Mon Commentaire</legend>
            <textarea
              name="review-text"
              id="review-text"
              maxLength="500"
              value={reviewText}
              onChange={(event) =>
                dispatch(getReviewContent(event.target.value, "reviewContent"))
              }
              placeholder="500 caractères max"
            />
          </fieldset>
          <input type="submit" value="Publier" className="review-submit-btn" />
        </form>
      ) : (
        <p>Veuillez vous connecter pour écrire un commentaire</p>
      )}
    </>
  ) : (
    <NewLoader />
  );
}

export default ViewerPost;
