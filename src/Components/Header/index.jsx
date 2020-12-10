import React from 'react';
import classes from './style.module.scss';
import Logo from '../../assets/Logo.jpg';
import MainLogo from '../../assets/mainLogo.png';

const Header = () => {
	return <div className={classes.header}>
		<div className={classes.headerImg}><img src={MainLogo} alt="mainlogo" /></div>
		<div className={classes.headerUserInfo}>
			<div className={classes.headerUserInfo_text}>created by <span>Ecaterina Pogorelova</span></div>
			<div className={classes.headerUserInfo_img}><img src={Logo} alt="logo" /></div>
		</div>
	</div>
}

export default Header;