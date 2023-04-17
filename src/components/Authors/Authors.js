import "./Authors.scss";

function Authors() {
  return (
    <section className="author-item">
      <div className="book-author">
        <ul>
          <li>
            <a href="/book-authors">
              <span className="cover-author">Donald Duck</span>
            </a>
          </li>
          <li className="page-author page3-author"></li>
          <li className="page-author page2-author"></li>
          <li className="page-author page1-author"></li>
        </ul>
      </div>
    </section>
  );
}

export default Authors;
