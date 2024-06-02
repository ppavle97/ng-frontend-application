import React from 'react';
import { StyledQuestItem } from './QuestItem.styled';
import Image from 'next/image';

import swordWhite from './assets/sword-white.png';
import swordGray from './assets/sword-gray.png';
import solidity from './assets/solidity.png';
import gold from './assets/gold.png';
import xp from './assets/xp.png';
import { QuestItemProps } from './types';

export const QuestItem = ({ detailed }: QuestItemProps) => {
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
		<StyledQuestItem detailed={detailed}>
			<Image
				src='https://cdn-staging.nodeguardians.com/backend-staging/Delegate_Call_Detection_crop_5d2c9cbe6c/Delegate_Call_Detection_crop_5d2c9cbe6c.webp'
				className='cover'
				alt='NG Frontend Application'
				width={100}
				height={100}
			/>
			<div className='content'>
				<div className='content-head'>
					<div className='content-left'>
						<p className='name'>Quest Name Goes Here</p>
						<div className='content-left-properties'>
							<div className='tree attribute-box'>
								<Image src={solidity} className='content-difficulty' alt='Sword' />
								<p>Solidity</p>
							</div>
							<div className='attribute-box'>
								{imageSources.map((src, index) => (
									<Image key={index} src={src} className='content-difficulty' alt='Sword' />
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
					<div className='content-right'>
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
				{detailed && (
					<>
						<div className='content-description'>
							Trading of cryptoassets in DeFi relies on new and unique matching mechanisms. One widely used mechanism in
							traditional finance is the centralised limit order book, which entails keeping electronic records of all
							outstanding orders. Likewise, Trading of cryptoassets in DeFi relies on new and unique matching
							mechanisms.
						</div>
						<div className='btn-group'>
							<button className='btn'>Go Back</button>
							<button className='btn'>Airdrop rewards to The Guardian</button>
						</div>
					</>
				)}
			</div>
		</StyledQuestItem>
	);
};
