/* eslint-disable react/require-default-props */
import PropTypes, { object } from "prop-types";
import axios from "axios";
import "./PageList.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BookElement from "../BookElement/BookElement";
import AuthorItem from "../Authors/Authors";

function PageList() {
  const [postsGenre, setPostsGenre] = useState([]);
  const [postsUnivers, setPostsUnivers] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const { id, param } = useParams();
  console.table(postsGenre);
  console.log(param, id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${param}/${id}/posts`)
      .then((response) => {
        switch (param) {
          case "genre":
            setPostsGenre([...response.data]);
            break;
          case "univers":
            setPostsUnivers([...response.data]);
            break;
          default:
            break;
        }
      });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/user`).then((response) => {
      setAuthorList([...response.data]);
    });
  }, [authorList]);

  return (
    <main className="page-list">
      {postsGenre.map((post) => (
        <BookElement {...post} />
      ))}

      {postsUnivers.map((post) => (
        <BookElement {...post} />
      ))}
      {authorList.map((author) => (
        <AuthorItem {...author} />
      ))}
    </main>
  );
}

PageList.propTypes = {
  posts: PropTypes.arrayOf(object),
  authors: PropTypes.arrayOf(object),
};

export default PageList;
