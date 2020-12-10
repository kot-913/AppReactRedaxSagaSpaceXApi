import React from 'react';
import classes from './styles.module.scss';
import Post from '../Post';

const Posts = () => {
	return <div className={classes.posts}>
		<Post />
	</div>
}

export default Posts;