'use client';
import Image from 'next/image';
import { NavigationContainer } from './Navigation.styled';
import { useAtom } from 'jotai';
import { goldAtom, xpAtom } from '../../store/atom';

import logo from './assets/logo.jpeg';
import goldIcon from './assets/gold.png';
import xpIcon from './assets/xp.png';
import devider from './assets/devider.png';
import avatar from './assets/avatar.png';

const Navigation = () => {
	const [gold] = useAtom(goldAtom);
	const [xp] = useAtom(xpAtom);

	return (
		<NavigationContainer>
			<Image className='logo' src={logo} alt='NG Frontend Application Logo' />
			<div className='menu'>
				<div className='menu-item'>
					<Image className='menu-item-icon' src={goldIcon} alt='NG Frontend Application Menu' />
					<p>{gold}</p>
				</div>
				<Image className='menu-devider' src={devider} alt='NG Frontend Application Menu' />
				<div className='menu-item'>
					<Image className='menu-item-icon' src={xpIcon} alt='NG Frontend Application Menu' />
					<p>{xp}</p>
				</div>
				<Image className='menu-avatar' src={avatar} alt='NG Frontend Application Menu' />
			</div>
		</NavigationContainer>
	);
};

export default Navigation;
