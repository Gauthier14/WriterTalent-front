/* eslint-disable quotes */
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
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
import Page404 from "../Page404/Page404";

// import Loader from "../Loader/Loader";
// import PageList from "../PageList/PageList";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/charte" element={<Charte />} />
        <Route path="/nouveautes" element={<PageList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/nous-contacter" element={<NousContacter />} />
        <Route path="/:param/:id/posts" element={<PageList />} />
        <Route path="/authors" element={<PageList />} />
        <Route path="*" element={<Page404 />} />
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
