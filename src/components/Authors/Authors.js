import "./Authors.scss";
import { Link } from "react-router-dom";

function Authors() {
  return (
    <section className="author-items">
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Donald Duck
            </Link>
            <span className="span-published">546 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Mickey Mouse
            </Link>
            <span className="span-published">357 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Marion Bross
            </Link>
            <span className="span-published">218 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Bob l'Eponge
            </Link>
            <span className="span-published">91 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Cendrillon
            </Link>
            <span className="span-published">46 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
      <div className="book-author">
        <ul>
          <li className="cover-author">
            <Link className="author-link" to="#">
              Spider-Man
            </Link>
            <span className="span-published">20 publications</span>
          </li>
          <li className="page-author page3-author" />
          <li className="page-author page2-author" />
          <li className="page-author page1-author" />
        </ul>
      </div>
    </section>
  );
}

export default Authors;
