import React from 'react';
import { StyledQuestItem } from './QuestItem.styled';
import Image from 'next/image';

import swordWhite from './assets/sword-white.png';
import swordGray from './assets/sword-gray.png';
import solidity from './assets/solidity.png';
import gold from './assets/gold.png';
import xp from './assets/xp.png';

export const QuestItem = () => {
	let difficulty = 3;
	const totalSwords = 5;
	const imageSources = [];

	for (let i = 0; i < difficulty; i++) {
		imageSources.push(swordWhite);
	}

	for (let i = difficulty; i < totalSwords; i++) {
		imageSources.push(swordGray);
	}
	return (
		<StyledQuestItem>
			<Image
				src='https://cdn-staging.nodeguardians.com/backend-staging/Delegate_Call_Detection_crop_5d2c9cbe6c/Delegate_Call_Detection_crop_5d2c9cbe6c.webp'
				className='cover'
				alt='NG Frontend Application'
				width={100}
				height={100}
			/>
			<div className='item'>
				<div className='item-left'>
					<p className='name'>Quest Name Goes Here</p>
					<div className='item-left-properties'>
						<div className='tree attribute-box'>
							<Image src={solidity} className='item-difficulty' alt='Sword' />
							<p>Solidity</p>
						</div>
						<div className='attribute-box'>
							{imageSources.map((src, index) => (
								<Image key={index} src={src} className='item-difficulty' alt='Sword' />
							))}
						</div>
						<div className='attribute-box'>
							<p>Build</p>
						</div>
						<div className='attribute-box'>
							<p>CTF</p>
						</div>
					</div>
				</div>
				<div className='item-right'>
					<div className='reward'>
						<div className='reward-item'>
							<Image className='menu-item-icon' src={gold} alt='NG Frontend Application Gold' />
							<p>14000</p>
						</div>
						<div className='reward-item'>
							<Image className='menu-item-icon' src={xp} alt='NG Frontend Application XP' />
							<p>14000</p>
						</div>
					</div>
				</div>
			</div>
		</StyledQuestItem>
	);
};
