/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

import { Routes, Route, useLocation } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { useEffect } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Charte from "../Charte/Charte";
import Authors from "../Authors/Authors";
import MentionsLegales from "../MentionsLegales/MentionsLegales";
import QuiSommesNous from "../QuiSommesNous/QuiSommesNous";
import NousContacter from "../NousContacter/NousContacter";
import PageList from "../PageList/PageList";
import Footer from "../Footer/Footer";
import "./App.scss";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";
import SinglePage from "../SinglePage/SinglePage";
import Editor from "../Editor/Editor";

// import Loader from "../Loader/Loader";
// import PageList from "../PageList/PageList";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

function App() {
  const { pathname } = useLocation();
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
        <Route path="/edit" element={<Editor />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/charte"
          element={
            <SinglePage>
              <Charte />
            </SinglePage>
          }
        />
        <Route path="/nouveautes" element={<PageList />} />
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
        <Route path="/:param/:id/posts" element={<PageList />} />
        <Route path="/authors" element={<Authors />} />
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
