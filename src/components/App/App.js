/* eslint-disable quotes */
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Charte from "../Charte/Charte";
import MentionsLegales from "../MentionsLegales/MentionsLegales";
import QuiSommesNous from "../QuiSommesNous/QuiSommesNous";
import NousContacter from "../NousContacter/NousContacter";
import PageList from "../PageList/PageList";
import Footer from "../Footer/Footer";
import "./App.scss";

import Register from "../Register/Register";

// import Loader from "../Loader/Loader";
// import PageList from "../PageList/PageList";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

function App() {
  const [postsGenre, setPostsGenre] = useState([]);
  const [postsUnivers, setPostsUnivers] = useState([]);
  const [postsAuthor, setPostsAuthor] = useState([]);
  const param = useEffect(() => {
    axios.get("http://localhost:8000/api/genres").then((response) => {
      setGenres([...response.data]);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/charte" element={<Charte />} />
        <Route path="/nouveautes" element={<PageList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/QuiSommesNous" element={<QuiSommesNous />} />
        <Route path="/NousContacter" element={<NousContacter />} />
        <Route path="/genre/:id" element={<PageList posts={postsGenre} />} />
        <Route
          path="/univers/:id"
          element={<PageList posts={postsUnivers} />}
        />
        <Route path="/author/:id" element={<PageList posts={postsAuthor} />} />
      </Routes>
      {/* <ButtonGoWriter /> */}

      {/* posts !== [] ? <PageList posts={posts} /> : <Loader /> */}

      {/* <Register /> */}
      {/* posts !== [] ? <PageList posts={posts} /> : <Loader /> */}

      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
