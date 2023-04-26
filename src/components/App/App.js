/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

import { Routes, Route, useLocation } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Charte from "../Charte/Charte";
import MentionsLegales from "../MentionsLegales/MentionsLegales";
import QuiSommesNous from "../QuiSommesNous/QuiSommesNous";
import NousContacter from "../NousContacter/NousContacter";
import Footer from "../Footer/Footer";
import "./App.scss";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";
import SinglePage from "../SinglePage/SinglePage";
import AuthorList from "../AuthorList/AuthorList";
import GenreList from "../GenreList/GenreList";
import CategoryList from "../CategoryList/CategoryList";
import RecentPosts from "../RecentPosts/RecentPosts";
import TextEditor from "../TextEditor/TextEditor";
import ViewerPost from "../ViewerPost/ViewerPost";
import Button from "../Button/Button";
import { manageLocalStorage } from "../../selectors/user";
import AuthorPosts from "../AuthorPosts/AuthorPosts";
import ProfileScripts from "../ProfileScripts/ProfileScripts";
import ProfileFavorites from "../ProfileFavorites/ProfileFavorites";
import UserConnexion from "../UserConnexion/UserConnexion";
import Message from "../Message/Message";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

function App() {
  const { pathname } = useLocation();
  const logged = manageLocalStorage("get", "logged");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return (
    <div className="app">
      <Header />

      {logged && <Button label="Rédiger un écrit" link="/user/post/new" />}

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
        <Route path="/nouveautes" element={<RecentPosts />} />
        <Route path="/user/post/new" element={<ViewerPost />} />
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
        <Route path="/genre/:id/posts" element={<GenreList />} />
        <Route path="/category/:id/posts" element={<CategoryList />} />
        <Route path="/posts/author/:id/" element={<AuthorPosts />} />
        <Route path="/posts/user/:pseudo/" element={<ProfileScripts />} />
        <Route
          path="/posts/favorites/:pseudo/"
          element={<ProfileFavorites />}
        />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/edit" element={<TextEditor />} />
        <Route path="/view" element={<ViewerPost />} />
        <Route path="/login" element={<UserConnexion />} />

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
