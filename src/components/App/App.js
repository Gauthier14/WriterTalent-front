/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

import { Routes, Route, useLocation } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Charte from "../Charte/Charte";
import MentionsLegales from "../MentionsLegales/MentionsLegales";
import QuiSommesNous from "../QuiSommesNous/QuiSommesNous";
import NousContacter from "../NousContacter/NousContacter";
import PageList from "../PageList/PageList";
import Footer from "../Footer/Footer";
import "./App.scss";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";
import SinglePage from "../SinglePage/SinglePage";
import AuthorList from "../AuthorList/AuthorList";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

function App() {
  const { pathname } = useLocation();
  const postsGenre = useSelector((state) => state.posts.publishedPostsPerGenre);
  const postsCategory = useSelector(
    (state) => state.posts.publishedPostsPerCategory
  );
  const recentPosts = useSelector((state) => state.posts.recentPublishedPosts);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/charte"
          element={
            <SinglePage>
              <Charte />
            </SinglePage>
          }
        />
        <Route path="/nouveautes" element={<PageList posts={recentPosts} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/mentions-legales"
          element={
            <SinglePage>
              <MentionsLegales />
            </SinglePage>
          }
        />
        <Route
          path="/qui-sommes-nous"
          element={
            <SinglePage>
              <QuiSommesNous />
            </SinglePage>
          }
        />
        <Route
          path="/nous-contacter"
          element={
            <SinglePage>
              <NousContacter />
            </SinglePage>
          }
        />
        <Route
          path="/genre/:id/posts"
          element={<PageList posts={postsGenre} />}
        />
        <Route
          path="/category/:id/posts"
          element={<PageList posts={postsCategory} />}
        />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
      <BsArrowBarUp
        className="scroll-button"
        onClick={() => {
          scrollToTop();
        }}
      />
    </div>
  );
}

export default App;
