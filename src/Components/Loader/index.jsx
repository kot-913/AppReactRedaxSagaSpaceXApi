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


export default LoaderItem;