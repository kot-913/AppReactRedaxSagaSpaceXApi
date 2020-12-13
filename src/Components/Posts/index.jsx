import React from 'react';
import Post from '../Post';


const Posts = ({postsList}) => {
	return postsList.map(post => (
		<Post post={post} key={post.id} />)
	)
}

export default Posts;