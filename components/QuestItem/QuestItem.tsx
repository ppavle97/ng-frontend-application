import React from 'react';
import { StyledQuestItem } from './QuestItem.styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAtomValue, useSetAtom } from 'jotai';

import { QuestItemProps } from './types';
import { airdropRewards, hasAirdroppedSelector } from '../../store/atom';

import swordWhite from './assets/sword-white.png';
import swordGray from './assets/sword-gray.png';
import solidity from './assets/solidity.png';
import gold from './assets/gold.png';
import xp from './assets/xp.png';

export const QuestItem = ({ item, detailed }: QuestItemProps) => {
	const router = useRouter();
	const airdrop = useSetAtom(airdropRewards);
	const hasAirdropped = useAtomValue(hasAirdroppedSelector);

	const difficulty = parseInt(item.difficulty, 10);
	const totalSwords = 5;

	const imageSources = Array.from({ length: totalSwords }, (_, index) => (index < difficulty ? swordWhite : swordGray));

	const handleOpenDetails = () => {
		router.push(`/quests/${item.slug}`);
	};

	const handleBack = () => {
		router.back();
	};

	const handleAirdrop = () => {
		airdrop({ amountOfGold: item.rewards.gold, amountOfXp: item.rewards.expPoints, slug: item.slug });
	};

	return (
		<StyledQuestItem onClick={handleOpenDetails} cover={item.cover ? true : false} detailed={detailed}>
			{item.cover && (
				<Image src={item.cover} className='cover' alt='NG Frontend Application' width={100} height={100} />
			)}
			<div className='content'>
				<div className='content-head'>
					<div className='content-left'>
						<p className='name'>{item.title}</p>
						<div className='content-left-properties'>
							<div className='tree attribute-box'>
								<Image
									src={solidity}
									className='content-difficulty'
									alt='NG Frontend Application language'
									width={100}
									height={100}
								/>
								<p>{item.language.label}</p>
							</div>
							<div className='attribute-box'>
								{imageSources.map((src, index) => (
									<Image key={index} src={src} className='content-difficulty' alt='Sword' width={100} height={100} />
								))}
							</div>
							<div className='attribute-box'>
								<p>{item.type.label}</p>
							</div>
						</div>
					</div>
					<div className='content-right'>
						<div className='reward'>
							<div className='reward-item'>
								<Image
									className='menu-item-icon'
									src={gold}
									alt='NG Frontend Application Gold'
									width={100}
									height={100}
								/>
								<p>{item.rewards.gold}</p>
							</div>
							<div className='reward-item'>
								<Image className='menu-item-icon' src={xp} alt='NG Frontend Application XP' width={100} height={100} />
								<p>{item.rewards.expPoints}</p>
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
							<button onClick={handleBack} className='btn'>
								Go Back
							</button>
							<button onClick={handleAirdrop} className='btn' disabled={hasAirdropped(item.slug)}>
								Airdrop rewards to The Guardian
							</button>
						</div>
					</>
				)}
			</div>
		</StyledQuestItem>
	);
};
