/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsArrowBarUp } from "react-icons/bs";
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
import TextEditorModif from "../TextEditorModif/TextEditorModif";
import AuthorPosts from "../AuthorPosts/AuthorPosts";
import ProfileScripts from "../ProfileScripts/ProfileScripts";
import ProfileFavorites from "../ProfileFavorites/ProfileFavorites";
import ReadLaterPosts from "../ReadLaterPosts/ReadLaterPosts";
import UserConnexion from "../UserConnexion/UserConnexion";
import { manageSessionStorage } from "../../selectors/user";

import Message from "../Message/Message";

function App() {
  const { pathname } = useLocation();
  const messages = useSelector((state) => state.messages.messages);
  const isLogged = Boolean(manageSessionStorage("get", "logged"));
  const registerOk = messages.find(
    (msg) =>
      msg.text ===
      "Votre compte a été créé avec succès, vous allez être redirigé vers la page de connexion"
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return (
    <div className="app">
      <Message messages={messages} />
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
        <Route path="/nouveautes" element={<RecentPosts />} />
        <Route path="/user/post/new" element={<ViewerPost />} />
        <Route
          path="/register"
          element={registerOk ? <Navigate to="/login" /> : <Register />}
        />
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
        <Route path="/posts/author/:id" element={<AuthorPosts />} />
        <Route path="/user/posts/favorites" element={<ProfileFavorites />} />
        <Route path="/user/posts/my-posts" element={<ProfileScripts />} />
        <Route path="/user/posts/to-read" element={<ReadLaterPosts />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/edit" element={<TextEditor />} />
        <Route path="/edit/:id" element={<TextEditorModif />} />
        <Route path="/view" element={<ViewerPost />} />
        <Route
          path="/login"
          element={isLogged ? <Navigate to="/" /> : <UserConnexion />}
        />
        <Route path="/post/read/:id" element={<ViewerPost />} />

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
