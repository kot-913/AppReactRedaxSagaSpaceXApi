import React from 'react';
import classes from './style.module.scss';
import Posts from '../Posts';

const PostsList = () => {
	return <div className={classes.postsList}>
		<div className={classes.postsListUpcoming}>Upcoming</div>
		<Posts />
		<div className={classes.postsListHistory}>History</div>
	</div>
}

export default PostsList;