import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
	return (
		<header className='navbar-container'>
			<img src={logo} alt='logo' className='logo' />
			<nav>
				<ul>
					<li>Find works</li>
					<li>Timesheets</li>
					<li>Messaging</li>
				</ul>
				<div className='profile-cont'>
					<div className='profile-image'>
						<img
							src='https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg'
							alt='profile'
						/>
					</div>
					<span>Logout</span>
					<i class='fa-solid fa-xmark'></i>
				</div>
			</nav>
			<i class='fa-solid fa-bars'></i>
		</header>
	);
};

export default Navbar;
