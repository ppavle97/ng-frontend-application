'use client';
import Image from 'next/image';
import { NavigationContainer } from './Navigation.styled';

import logo from './assets/logo.jpeg';
import gold from './assets/gold.png';
import xp from './assets/xp.png';
import devider from './assets/devider.png';
import avatar from './assets/avatar.png';

const Navigation = () => {
	return (
		<NavigationContainer>
			<Image className='logo' src={logo} alt='NG Frontend Application Logo' />
			<div className='menu'>
				<div className='menu-item'>
					<Image className='menu-item-icon' src={gold} alt='NG Frontend Application Menu' />
					<p>12 023</p>
				</div>
				<Image className='menu-devider' src={devider} alt='NG Frontend Application Menu' />
				<div className='menu-item'>
					<Image className='menu-item-icon' src={xp} alt='NG Frontend Application Menu' />
					<p>532 023</p>
				</div>
				<Image className='menu-avatar' src={avatar} alt='NG Frontend Application Menu' />
			</div>
		</NavigationContainer>
	);
};

export default Navigation;
