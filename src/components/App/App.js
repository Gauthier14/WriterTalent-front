/* eslint-disable quotes */

import Header from "../Header/Header";
//import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
import BookElement from "../BookElement/BookElement";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/post.json?key=8f5bac10")
      .then((response) => {
        setPosts([...response.data]);
        console.log(response);
      });
  }, []);
  return (
    <div className="app">
      <Header />
      {posts.map((post) => (
        <BookElement {...post} />
      ))}
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
