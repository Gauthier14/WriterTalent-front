import "./AuthorItem.scss";

function AuthorItem() {
  return (
    <section className="author-item">
      <div className="book-author">
        <ul>
          <li className="cover-author">Steak-Frites</li>
          <li className="page-author page3-author"></li>
          <li className="page-author page2-author"></li>
          <li className="page-author page1-author"></li>
        </ul>
      </div>
      <div className="infos-book">
        <span className="tag-genre">Roman</span>
        <span className="tag-category">Aventure</span>
        <button>Lire</button>
      </div>
      </section>
  );
}

export default AuthorItem;
