import React from 'react';
import classes from './style.module.scss';


const LoaderItem = () => {
	return (
		<div className={classes.loaderItem}>
			<div className={classes.loaderImgPlace}>
				<div className={classes.loaderImg}></div>
		</div>
		<div className={classes.loaderPostItem}>
			<div className={classes.loaderPostItemFirst}>
				<div className={classes.loaderPostItemFirstLeft}></div>
				<div className={classes.loaderPostItemFirstRight}></div>	
			</div>
				

			<div className={classes.loaderDatePlace}></div>
		
			<div className={classes.loaderPostTop}></div>
			<div className={classes.loaderPostBottom}></div>
		</div>
		</div>
	)
}


const Loader = () => {
	return (
		<div>
			<div className={classes.postsListUpcoming}>Upcoming</div>
			<LoaderItem />
			<LoaderItem />
			<LoaderItem />
			<div className={classes.postsListUpcoming}>Upcoming</div>
			<LoaderItem />
			<LoaderItem />
			<LoaderItem />
		</div>
	)
}

export default Loader;