import React from "react";
import "../src/styles/reset.scss";
import Header from "./Components/Header";
import PostsList from "../src/Components/PostsList";
import classes from "./App.module.scss";
import Menu from "./assets/menu.png";
import Loader from "./Components/Loader";
import Error from "./Components/Error";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <PostsList />
      <Loader />
      <Error />
      <div className={classes.footer}>
        <div className={classes.footerMeniu}>
          <img src={Menu} alt="menu" />
        </div>
        <div className={classes.footerText}>SEE MORE</div>
      </div>
    </div>
  );
}

export default App;
