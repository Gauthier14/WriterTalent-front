/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import "./ViewerPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { changePage, getReviewContent, sendReview, setToggleViewerMenu } from "../../actions/viewer";
import { getReadPostFromApi } from "../../actions/posts";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { convertStringDate } from "../../selectors/viewer";

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const currentPage = useSelector((state) => state.viewer.currentPage);
  const reviewText = useSelector((state) => state.viewer.reviewContent);
  console.log(reviewText);
  const postToRead = useSelector((state) => state.posts.postToRead);
  const loaded = useSelector((state) => state.posts.loaded);
  const { title, content, nbLikes, nbViews, user, reviews, id:postId } = postToRead;

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReadPostFromApi(id));
  }, [id]);

  const words = content.split(" ");
  const wordsPerPage = 200;
  const pageCount = Math.ceil(words.length / wordsPerPage);
  const handleClickPage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const renderedContent = () => {
    const startIndex = (currentPage - 1) * wordsPerPage;
    const endIndex = startIndex + wordsPerPage;
    const pageWords = words.slice(startIndex, endIndex);
    // Check if the last word on the current page is cut off
    const lastWord = pageWords[pageWords.length - 1];
    const isLastWordCut = !lastWord.endsWith(".") && !lastWord.endsWith(",");
    if (isLastWordCut) {
      // If it is cut off, find the beginning of the next word
      const nextWordIndex = content.indexOf(
        lastWord,
        startIndex + wordsPerPage
      );
      if (nextWordIndex !== -1) {
        const nextWord = content.slice(
          nextWordIndex,
          content.indexOf(" ", nextWordIndex)
        );
        pageWords[pageWords.length - 1] += nextWord;
      }
    }
    return pageWords.join(" ");
  };
  
  return loaded ? (
    <>
      <main className="viewer-body">
        <div className="viewer-header">
          <BiFoodMenu
            className="toggle-menu"
            onClick={() => dispatch(setToggleViewerMenu())}
          />

          <h1 className="viewer-title">{title}</h1>
          <h2>{user.username}</h2>
          <span>
            <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
            {nbLikes}
          </span>
          <span>
            <BsEyeFill style={{ marginRight: "0.5em" }} />
            {nbViews}
          </span>
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
          {renderedContent()}
        </section>
      </main>
      <section className="reviews">
        <h2>Commentaires</h2>

        {reviews.length > 0 ? (
          reviews.map((review) => (
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

      <form onSubmit={(e)=> {
        e.preventDefault();
        dispatch(sendReview(postId))
      }} 
      className="new-review">
        <fieldset>
          <legend>Laisser un commentaire (500 caractères max)</legend>
          <textarea name="review-text" id="review-text" maxLength="500" value={reviewText} onChange={(event)=>dispatch(getReviewContent(event.target.value, "reviewContent"))}/>
        </fieldset>
        <input type="submit" value="Publier"/>
      </form>
    </>
  ) : (
    <Loader />
  );
}

export default ViewerPost;
