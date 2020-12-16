import React from 'react';
import { connect } from 'react-redux';
import classes from './style.module.scss';
import Posts from '../Posts';
import Menu from "../../assets/menu.png";
import { fetchPosts } from '../redux/actions';


const PostsList = ({ upcoming, history, loadMore }) => {
	return <div className={classes.postsList}>
		<div className={classes.postsListUpcoming}>Upcoming</div>
		<Posts postsList={ upcoming } />
		<div className={classes.postsListHistory}>History</div>
		<Posts postsList={ history }/>
		<button className={classes.footerButton}>
        <div className={classes.footerMeniu}>
          <img src={Menu} alt="menu" />
        </div>
        <div onClick={loadMore} className={classes.footerText}>SEE MORE</div>
      </button>
	</div>
}
const mapStateToProps = (state) => ({
	upcoming: state.posts.upcoming,
	history: state.posts.history,
});
  
const mapDispatchToProps = (dispatch) => ({
	loadMore: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);