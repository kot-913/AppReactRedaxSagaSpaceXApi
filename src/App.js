import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../src/styles/reset.scss";
import Header from "./Components/Header";
import { fetchPosts } from "./Components/redux/actions";
import PostsList from "../src/Components/PostsList";
import Error from "./Components/Error";
import classes from "./App.module.scss";

function App({ fetchPosts, isError }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("error", isError);

  return (
    <div className={classes.app}>
      <Header />
      {isError ? <Error /> : <PostsList />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const mapStateToProps = (postsReducer) => ({
  isError: postsReducer.isError,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
