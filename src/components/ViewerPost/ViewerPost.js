/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import './ViewerPost.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { BsFillHandThumbsUpFill, BsEyeFill, BsHandThumbsUp } from 'react-icons/bs';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { BiFoodMenu } from 'react-icons/bi';
import { AiOutlineRead, AiFillClockCircle } from 'react-icons/ai';
import {
  addPostToFavoriteList,
  addPostToReadLaterList,
  changePage,
  getReviewContent,
  likePost,
  sendReview,
  setToggleViewerMenu,
} from '../../actions/viewer';
import { getReadPostFromApi } from '../../actions/posts';
import NewLoader from '../NewLoader/NewLoader';
import {
  convertDraftToHtml,
  convertStringDate,
  splitHTML,
  groupByFive,
} from '../../selectors/viewer';
import { setMessageInfosInState } from '../../actions/messages';
import { generateMessages, showMessages } from '../../selectors/message';
import { manageSessionStorage } from '../../selectors/user';

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const currentPage = useSelector((state) => state.viewer.currentPage);
  const reviewText = useSelector((state) => state.viewer.reviewContent);
  const postToRead = useSelector((state) => state.posts.postToRead);
  const PostToReadStatus = useSelector((state) => state.posts.infosPostToReadStatus);
  const isLogged = Boolean(manageSessionStorage('get', 'logged'));
  const { title, content, nbViews, user, reviews, id: postId } = postToRead;
  const { like, favorite, readLater, nbLikes } = PostToReadStatus;

  // let reviewsReversed = "";

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReadPostFromApi(id));
  }, [id]);

  const handleClickPage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const paragraphsPerPage = 10;
  let pageCount = '';
  let pages = [];
  if (postToRead.content !== '{"article en chargement"}') {
    const paragraphs = convertDraftToHtml(content).split(/<\/p>/);
    pageCount = Math.ceil(paragraphs.length / paragraphsPerPage);
    pages = groupByFive(splitHTML(convertDraftToHtml(content)));
  }

  return postToRead.content !== '{"article en chargement"}' ? (
    <main>
      <div className="viewer-body">
        <div className="viewer-header">
          <BiFoodMenu
            size={40}
            className="toggle-menu"
            onClick={() => dispatch(setToggleViewerMenu())}
          />

          <h1 className="viewer-title">{title}</h1>
          <h2>{user.username}</h2>
        </div>
        <aside className={!isVisible ? 'sidebar' : 'sidebar sidebar-toggled'}>
          <nav>
            <ul>
              {Array.from({ length: pageCount }, (_, i) => (
                <li
                  key={i}
                  className={i + 1 === currentPage ? 'active' : ''}
                  onClick={() => handleClickPage(i + 1)}
                >
                  Page {i + 1}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className={!isVisible ? 'main' : 'main main-toggled'}>
          {pages.map((page, index) => (
            <div
              key={`page-${index}`}
              className={index + 1 === currentPage ? 'active' : ''}
              dangerouslySetInnerHTML={{ __html: page }}
            />
          ))}
        </section>
      </div>
      <div className="post-infos">
        {isLogged ? (
          <>
            <span onClick={() => dispatch(likePost(postId))}>
              {like ? (
                <BsFillHandThumbsUpFill
                  size={25}
                  style={{ marginRight: '0.5em', color: 'rgba(123, 182, 149, 0.9)' }}
                />
              ) : (
                <BsHandThumbsUp size={25} style={{ marginRight: '0.5em' }} />
              )}
              {nbLikes}
            </span>
            <span
              className="read-later-container"
              onClick={() => dispatch(addPostToReadLaterList(postId))}
            >
              {readLater ? (
                <>
                  <AiOutlineRead size={35} />
                  <AiFillClockCircle size={25} color="green" />
                </>
              ) : (
                <>
                  <AiOutlineRead size={35} />
                  <AiFillClockCircle size={25} color="#000" />
                </>
              )}
            </span>
            {favorite ? (
              <MdFavorite
                size={35}
                color="red"
                onClick={() => dispatch(addPostToFavoriteList(postId))}
              />
            ) : (
              <MdFavoriteBorder
                size={35}
                color="red"
                onClick={() => dispatch(addPostToFavoriteList(postId))}
              />
            )}
            <span>
              <BsEyeFill style={{ marginRight: '0.5em' }} />
              {nbViews}
            </span>
          </>
        ) : (
          <>
            <span onClick={() => dispatch(likePost(postId))}>
              <BsFillHandThumbsUpFill
                size={25}
                style={{ marginRight: '0.5em', color: 'rgba(123, 182, 149, 0.9)' }}
              />
              {nbLikes}
            </span>
            <span>
              <BsEyeFill style={{ marginRight: '0.5em' }} />
              {nbViews}
            </span>
          </>
        )}
      </div>
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
      {isLogged ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (reviewText !== '') {
              dispatch(sendReview(postId));
            } else {
              dispatch(setMessageInfosInState(generateMessages('review-content-empty')));
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
              onChange={(event) => dispatch(getReviewContent(event.target.value, 'reviewContent'))}
              placeholder="500 caractères max"
            />
          </fieldset>
          <input type="submit" value="Publier" className="review-submit-btn" />
        </form>
      ) : (
        <p className="alternative-reviews">Veuillez vous connecter pour écrire un commentaire</p>
      )}
    </main>
  ) : (
    <NewLoader />
  );
}

export default ViewerPost;
