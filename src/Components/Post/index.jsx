import React from 'react'
import classes from './style.module.scss';
import image1 from '../../assets/image1.png';
import maximize from '../../assets/maximize.png'
import play from '../../assets/play.png'

const Post = () => {
	const date = Date().toLocaleString();
	return <div className={classes.post}>
		<div className={classes.postImg}><img src={image1} alt="image1" /></div>
		<div className={classes.postItem}>
			<div className={classes.firstLinePost}>
				<div className={classes.firstLinePostLeft}>
				<div className={classes.firstLineID}>#1</div>
				<div className={classes.firstLinePostTitle}>FalconSat</div>
					<div className={classes.firstLinePostStatus}>Unknown</div>
					</div>
					<div className={classes.firstLinePostMaximize}><img src={maximize} alt="maximize" /></div>
					
			</div>
			<div className={classes.datePost}>{date}</div>
			<div className={classes.mainPostLine}>
				<div className={classes.mainPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia ut? Ut fuga aspernatur repellendus ipsa repellat asperiores delectus odit iste numquam, doloribus ea quia alias facilis. Cupiditate, voluptate repellendus.</div>
				<div className={classes.watchPost}>
				<div className={classes.watchPostIcon}><img src={play} alt="play" /></div>
				<div className={classes.watchPostText}>WATCH</div>
				</div>
			</div>
		</div>
	</div>
}

export default Post;