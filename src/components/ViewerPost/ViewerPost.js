// /* eslint-disable react/jsx-curly-newline */
// /* eslint-disable brace-style */
// /* eslint-disable implicit-arrow-linebreak */
// /* eslint-disable object-curly-newline */
// /* eslint-disable comma-dangle */
// /* eslint-disable operator-linebreak */
// import "./ViewerPost.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
// import { MdFavoriteBorder } from "react-icons/md";
// import { BiFoodMenu } from "react-icons/bi";
// import { AiFillRead, AiOutlineClockCircle } from "react-icons/ai";

// import {
//   addPostToFavoriteList,
//   addPostToReadLaterList,
//   changePage,
//   getReviewContent,
//   likePost,
//   sendReview,
//   setToggleViewerMenu,
// } from "../../actions/viewer";
// import { getReadPostFromApi } from "../../actions/posts";
// import NewLoader from "../NewLoader/NewLoader";
// import { convertDraftToHtml, convertStringDate } from "../../selectors/viewer";
// import { setMessageInfosInState } from "../../actions/messages";
// import { generateMessages, showMessages } from "../../selectors/message";
// import { manageSessionStorage } from "../../selectors/user";

// function ViewerPost() {
//   const dispatch = useDispatch();
//   const isVisible = useSelector((state) => state.viewer.visible);
//   const currentPage = useSelector((state) => state.viewer.currentPage);
//   const reviewText = useSelector((state) => state.viewer.reviewContent);
//   const postToRead = useSelector((state) => state.posts.postToRead);
//   const loaded = useSelector((state) => state.posts.loaded);
//   const isLogged = Boolean(manageSessionStorage("get", "logged"));
//   const {
//     title,
//     nbLikes,
//     content,
//     nbViews,
//     user,
//     reviews,
//     id: postId,
//   } = postToRead;

//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(getReadPostFromApi(id));
//   }, [id]);

//   const handleClickPage = (pageNumber) => {
//     dispatch(changePage(pageNumber));
//   };
//   if (loaded) {
//     convertDraftToHtml(content);
//   }
//   const words = content.split(" ");
//   const wordsPerPage = 200;
//   const pageCount = Math.ceil(words.length / wordsPerPage);

//   return loaded ? (
//     <>
//       <main className="viewer-body">
//         <div className="viewer-header">
//           <BiFoodMenu
//             size={40}
//             className="toggle-menu"
//             onClick={() => dispatch(setToggleViewerMenu())}
//           />

//           <h1 className="viewer-title">{title}</h1>
//           <h2>{user.username}</h2>
//         </div>
//         <aside className={!isVisible ? "sidebar" : "sidebar sidebar-toggled"}>
//           <h3>Pages...</h3>
//           <nav>
//             <ul>
//               {Array.from({ length: pageCount }, (_, i) => (
//                 <li
//                   key={i}
//                   className={i + 1 === currentPage ? "active" : ""}
//                   onClick={() => handleClickPage(i + 1)}
//                 >
//                   Page {i + 1}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>
//         <section className={!isVisible ? "main" : "main main-toggled"}>
//           {/* renderedContent(convertDraftToHtml(content), 200, currentPage) */}
//           {convertDraftToHtml(content)}
//         </section>
//       </main>

//       <div className="post-infos">
//         <span onClick={() => dispatch(likePost(postId))}>
//           <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
//           {nbLikes}
//         </span>
//         <span>
//           <BsEyeFill style={{ marginRight: "0.5em" }} />
//           {nbViews}
//         </span>
//         <span
//           className="read-later-container"
//           onClick={() => dispatch(addPostToReadLaterList(postId))}
//         >
//           <AiFillRead size={30} />
//           <AiOutlineClockCircle size={20} />
//         </span>
//         <MdFavoriteBorder
//           size={30}
//           color="#"
//           onClick={() => dispatch(addPostToFavoriteList(postId))}
//         />
//       </div>
//       <section className="reviews">
//         <h2>Commentaires</h2>

//         {reviews.length > 0 ? (
//           reviews.map((review) => (
//             <div className="review" key={review.id}>
//               <div className="review_infos">
//                 <h3>{review.user.username}</h3>
//                 <span>{convertStringDate(review.createdAt)}</span>
//               </div>
//               <p>{review.content}</p>
//             </div>
//           ))
//         ) : (
//           <p>Soyez le premier à donner votre avis sur cet écrit !!</p>
//         )}
//       </section>
//       {isLogged ? (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             if (reviewText !== "") {
//               dispatch(sendReview(postId));
//             } else {
//               dispatch(
//                 setMessageInfosInState(generateMessages("review-content-empty"))
//               );
//               showMessages();
//             }
//           }}
//           className="new-review"
//         >
//           <fieldset>
//             <legend>Mon Commentaire</legend>
//             <textarea
//               name="review-text"
//               id="review-text"
//               maxLength="500"
//               value={reviewText}
//               onChange={(event) =>
//                 dispatch(getReviewContent(event.target.value, "reviewContent"))
//               }
//               placeholder="500 caractères max"
//             />
//           </fieldset>
//           <input type="submit" value="Publier" className="review-submit-btn" />
//         </form>
//       ) : (
//         <p>Veuillez vous connecter pour écrire un commentaire</p>
//       )}
//     </>
//   ) : (
//     <NewLoader />
//   );
// }

// export default ViewerPost;



/* eslint-disable react/jsx-curly-newline */
/* eslint-disable brace-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
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
import { convertDraftToHtml, convertStringDate } from '../../selectors/viewer';
import { setMessageInfosInState } from '../../actions/messages';
import { generateMessages, showMessages } from '../../selectors/message';
import { manageSessionStorage } from '../../selectors/user';

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const currentPage = useSelector((state) => state.viewer.currentPage);
  const reviewText = useSelector((state) => state.viewer.reviewContent);
  const postToRead = useSelector((state) => state.posts.postToRead);
  const loaded = useSelector((state) => state.posts.loaded);
  const PostToReadStatus = useSelector((state) => state.posts.infosPostToReadStatus);
  const isLogged = Boolean(manageSessionStorage('get', 'logged'));
  const { like, favorite, readLater } = PostToReadStatus;
  const { title, nbLikes, content, nbViews, user, reviews, id: postId } = postToRead;

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReadPostFromApi(id));
  }, [id]);

  const [renderedContent, setRenderedContent] = useState('');

  useEffect(() => {
    setRenderedContent(convertDraftToHtml(content));
  }, [content]);

  const handleClickPage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const words = renderedContent.split(' ');
  const wordsPerPage = 200;
  const pageCount = Math.ceil(words.length / wordsPerPage);

  const renderPage = (pageNum) => {
    const startIndex = (pageNum - 1) * wordsPerPage;
    const endIndex = startIndex + wordsPerPage;
    return renderedContent.split(' ').slice(startIndex, endIndex).join(' ');
  }

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
        <aside className={!isVisible ? 'sidebar' : 'sidebar sidebar-toggled'}>
          <h3>Pages...</h3>
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
          {convertDraftToHtml(content)}
        </section>
      </main>
      <div className="post-infos">
        <span onClick={() => dispatch(likePost(postId))}>
          {like ? (
            <BsFillHandThumbsUpFill size={20} style={{ marginRight: '0.5em' }} />
          ) : (
            <BsHandThumbsUp size={20} style={{ marginRight: '0.5em' }} />
          )}
          {nbLikes}
        </span>
        <span>
          <BsEyeFill style={{ marginRight: '0.5em' }} />
          {nbViews}
        </span>
        <span
          className="read-later-container"
          onClick={() => dispatch(addPostToReadLaterList(postId))}
        >
          {readLater ? (
            <>
              <AiOutlineRead size={30} />
              <AiFillClockCircle size={20} color="green" />
            </>
          ) : (
            <>
              <AiOutlineRead size={30} />
              <AiFillClockCircle size={20} color="#000" />
            </>
          )}
        </span>
        {favorite ? (
          <MdFavorite
            size={30}
            style={{ marginRight: '0.5em' }}
            onClick={() => dispatch(addPostToFavoriteList(postId))}
          />
        ) : (
          <MdFavoriteBorder
            size={30}
            style={{ marginRight: '0.5em' }}
            onClick={() => dispatch(addPostToFavoriteList(postId))}
          />
        )}
        <span
          className="add-review-container"
          onClick={() => {
            if (!isLogged) {
              dispatch(
                setMessageInfosInState({
                  type: 'error',
                  message: 'Vous devez être connecté pour ajouter un commentaire.',
                })
              );
              showMessages(generateMessages());
            } else {
              dispatch(sendReview());
            }
          }}
        >
          Ajouter un commentaire
        </span>
      </div>
      <ul className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p className="infos-review">Par {review.user.username} le {convertStringDate(review.createdAt)}</p>
            </li>
          ))
        ) : (
          <p className="no-review">Pas de commentaires pour l'instant...</p>
        )}
      </ul>
      <NewLoader />
    </>
  ) : (
    <NewLoader />
  );
  
}

export default ViewerPost;
