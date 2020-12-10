import React from 'react';
import classes from './style.module.scss';
import errorImg from '../../assets/errorImg.png';
import errorText from '../../assets/errorText.png';

const Error = () => {
	return (
		<div className={classes.error}>
			<div className={classes.errorImg}><img src={errorImg} alt="errorImg"/></div>
			<div className={classes.errorText}><img src={errorText} alt="errorText"/></div>
		</div>
	)
}

export default Error;