import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post';
import Loader from '../Loader';


const Posts = ({ postsList, isLoading }) => {
	if (isLoading) return (
		<>
			<Loader />	
			<Loader />	
			<Loader />	
		</>	
	);
	return postsList.map(post => (
		<Post post={post} key={post.id} />)
	)
}

const mapStateToProps = (state) => ({
	isLoading: state.loader.loading,
});
  
export default connect(mapStateToProps, null)(Posts);