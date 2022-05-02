import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
	const [Navigation, setNavigation] = useState({ nav: '', list: '' });
	const toggleNav = (status) => {
		if (window.innerWidth > 768) setNavigation({ nav: '', list: '' });
		status === true
			? setNavigation({ nav: 'translateX(0%)', list: 'translateX(0%)' })
			: setNavigation({ nav: '', list: '' });
	};
	return (
		<header className='navbar-container'>
			<img src={logo} alt='logo' className='logo' />
			<nav style={{ transform: `${Navigation.nav}` }}>
				<ul style={{ transform: `${Navigation.list}` }}>
					<li>Find works</li>
					<li>Timesheets</li>
					<li>Messaging</li>
				</ul>
				<div className='profile-cont' style={{ transform: `${Navigation.list}` }}>
					<div className='profile-image'>
						<img
							src='https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg'
							alt='profile'
						/>
					</div>
					<span>Logout</span>
					<i class='fa-solid fa-xmark' onClick={() => toggleNav(false)}></i>
				</div>
			</nav>
			<i class='fa-solid fa-bars' onClick={() => toggleNav(true)}></i>
		</header>
	);
};

export default Navbar;
