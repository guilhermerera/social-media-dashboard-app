import React from "react";

function Header(props) {
	return (
		<header className='header'>
			<div className='header-title'>
				<h1 className='header-title-main'>{props.mainTitle}</h1>
				<p className='header-title-sub'>{props.subTitle}</p>
			</div>
			<div className='theme-switch'>
				<p className='theme-switch-text'>Dark Mode</p>
				<div className='theme-switch-trigger'>
					<div className='theme-switch-trigger-btn'></div>
				</div>
			</div>
		</header>
	);
}

export default Header;
