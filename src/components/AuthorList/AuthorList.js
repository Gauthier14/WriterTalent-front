/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import AuthorItem from "./AuthorItem";
import { setAllAthorsInState } from "../../actions/user";
import "./AuthorList.scss";

function AuthorList() {
  const authors = useSelector((state) => state.user.authors);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://kyllian-g-server.eddi.cloud:8443/api/users/authors")
      .then((response) => {
        dispatch(setAllAthorsInState(response.data));
      })
      .catch((error) => {
        // le serveur nous retourne 401 si les identifiants ne sont pas bons
        console.warn(error);
      });
  }, []);
  return (
    <main className="author-items">
      {authors.length > 0 ? (
        authors.map((author) => (
          <AuthorItem
            id={author.id}
            username={author.username}
            key={author.id}
          />
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default AuthorList;
