/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import axios from "axios";
import "./PageList.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BookElement from "../BookElement/BookElement";
import AuthorItem from "../AuthorItem/AuthorItem";

function PageList() {
  const [postsGenre, setPostsGenre] = useState([]);
  const [postsUnivers, setPostsUnivers] = useState([]);
  // const [authorList, setAuthorList] = useState([]);
  const { id, param } = useParams();
  console.table(postsGenre);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${param}/${id}/posts`)
      .then((response) => {
        switch (param) {
          case "genre":
            console.log(response);
            setPostsGenre([...response.data]);
            break;
          case "category":
            setPostsUnivers([...response.data]);
            break;
          default:
            break;
        }
      });
  }, [postsGenre]);

  /* useEffect(() => {
    axios.get(`http://localhost:8000/api/users/authors`).then((response) => {
      setAuthorList([...response.data]);
    });
  }, []); */

  return (
    <main className="page-list">
      {postsGenre !== [] &&
        postsGenre.map((post) => (
          <BookElement {...post} link={`/post/${post.id}`} />
        ))}

      {postsUnivers !== [] &&
        postsUnivers.map((post) => (
          <BookElement {...post} link={`/post/${post.id}`} />
        ))}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
