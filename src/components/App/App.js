/* eslint-disable quotes */

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
// import Charte from "../Charte/Charte";
import Register from "../Register/Register";
import Loader from "../Loader/Loader";
import PageList from "../PageList/PageList";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/post.json?key=8f5bac10")
      .then((response) => {
        setPosts([...response.data]);
      });
  }, []);
  return (
    <div className="app">
      <Header />

      <Register />
      {/* posts !== [] ? <PageList posts={posts} /> : <Loader /> */}

      {/* <Main /> */}

      <Footer />
    </div>
  );
}

export default App;
