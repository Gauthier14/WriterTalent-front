/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import "./ViewerPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { changePage, setToggleViewerMenu } from "../../actions/viewer";
import { getReadPostFromApi } from "../../actions/posts";

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const currentPage = useSelector((state) => state.viewer.currentPage);
  const postToRead = useSelector((state) => state.posts.postToRead);
  // const [currentPage, setCurrentPage] = useState(1);
  const { content, title } = postToRead;
  // const [content, setContent] = useState("");

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReadPostFromApi(id));
  }, [id]);

  const words = content.split(" ");
  const wordsPerPage = 400;
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

  return (
    <>
      <main className="viewer-body">
        <div className="viewer-header">
          <BiFoodMenu
            className="toggle-menu"
            onClick={() => dispatch(setToggleViewerMenu())}
          />

          <h1 className="viewer-title">{postToRead.title}</h1>
          <h2>{postToRead.author}</h2>
          <span>
            <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
            {postToRead.nbLikes}
          </span>
          <span>
            <BsEyeFill style={{ marginRight: "0.5em" }} />
            {postToRead.nbViews}
          </span>
          <h1 className="viewer-title">Title</h1>
          <h2>Auteur</h2>
          <span>
            <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
            52
          </span>
          <span>
            <BsEyeFill style={{ marginRight: "0.5em" }} />
            85
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

        {postToRead.reviews &&
          postToRead.reviews.map((review) => (
            <div className="review" key={review.id}>
              <div className="review_infos">
                <h3>{review.username}</h3>
                <span>{review.date}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}

        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            recusandae velit autem repellendus pariatur architecto culpa ad amet
            doloribus perferendis, nostrum praesentium in a spernatur iste quos
            perspiciatis, vero expedita dignissimos?
          </p>
        </div>
        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            recusandae velit autem repellendus pariatur architecto culpa ad amet
            doloribus perferendis, nostrum praesentium in a spernatur iste quos
            perspiciatis, vero expedita dignissimos?
          </p>
        </div>
      </section>

      <form action="" method="post" className="new-review">
        <fieldset>
          <legend>Laisser un commentaire</legend>
          <textarea name="review-text" id="review-text" maxLength="500" />
        </fieldset>
      </form>
    </>
  );
}

export default ViewerPost;
