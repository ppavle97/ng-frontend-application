'use client';
import { Content } from '@/components/Content/Content';
import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { StyledQuestsList } from './Quests.styled';
import { QuestItem } from '@/components/QuestItem/QuestItem';

const fetchQuests = async () => {
	try {
		const { data } = await axios.get('/api/quests');
		return data;
	} catch (error) {
		console.error('Error fetching quests:', error);
		throw error;
	}
};

const QuestsPage: NextPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['quests'],
		queryFn: fetchQuests
	});

	return (
		<Content size='large'>
			{isLoading && (
				<div className='info'>
					<p>Loading...</p>
				</div>
			)}
			{error && (
				<div className='info'>
					<p>Error loading quests: {error.message}</p>
				</div>
			)}

			<StyledQuestsList>
				{data && data.map((item: any, index: number) => <QuestItem key={index} item={item} />)}
			</StyledQuestsList>
		</Content>
	);
};

export default QuestsPage;
