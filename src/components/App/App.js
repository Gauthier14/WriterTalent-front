/* eslint-disable quotes */

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
// import Charte from "../Charte/Charte";
// import Register from "../Register/Register";
// import Loader from "../Loader/Loader";
// import PageList from "../PageList/PageList";
// import ButtonGoWriter from "../ButtonGoWriter/ButtonGoWriter";

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
      {/* <ButtonGoWriter /> */}

<<<<<<< HEAD

      {/* <Register /> */}
      {/* posts !== [] ? <PageList posts={posts} /> : <Loader /> */}
   
=======
      <Register />
      {/* posts !== [] ? <PageList posts={posts} /> : <Loader /> */}
>>>>>>> 27b73a410ff2ce47b326222ab13bc005619164a1

      <Main />

      <Footer />
    </div>
  );
}

export default App;
