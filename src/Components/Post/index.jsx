import React from 'react'
import classes from './style.module.scss';
import image1 from '../../assets/image1.png';
import maximize from '../../assets/maximize.png'
import play from '../../assets/play.png'

const Post = ({post}) => {
	const date = new Date(post.launch_date_utc).toLocaleString();
	const image = post.links.mission_patch || image1;
	let postStatus;
	if (post.launch_success) {
		postStatus = "success";

	}
	else if (post.launch_success === null) {
		postStatus = "unknown";
	}
	else if (!post.launch_success) {
		postStatus = "failure";
	}
	else return;



	return <div className={classes.post}>
		<div className={classes.postImg}><img src={image} alt="image1" /></div>
		<div className={classes.postItem}>
			<div className={classes.firstLinePost}>
				<div className={classes.firstLinePostLeft}>
					<div className={classes.firstLineID}>#{post.flight_number }</div>
					<div className={classes.firstLinePostTitle}>{post.mission_name}</div>
					<div className={`${classes.firstLinePostStatus} ${classes[`firstLinePostStatus_${postStatus}`]}`}>{postStatus}</div>
					</div>
					<a href={post.links.article_link} className={classes.firstLinePostMaximize}><img src={maximize} alt="maximize" /></a>
					
			</div>
			<div className={classes.datePost}>Launch date: {date}</div>
			<div className={classes.mainPostLine}>
				<div className={classes.mainPost}>{post.details}</div>
					<a href={post.links.video_link} className={classes.watchPost}>
						<div className={classes.watchPostIcon}><img src={play} alt="play" /></div>
						<div className={classes.watchPostText}>WATCH</div>
					</a>
			</div>
		</div>
	</div>
}

export default Post;