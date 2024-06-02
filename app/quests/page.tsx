'use client';
import { Content } from '@/components/Content/Content';
import { NextPage } from 'next';
import { StyledQuestsList } from './Quests.styled';
import { QuestItem } from '@/components/QuestItem/QuestItem';

const QuestsPage: NextPage = () => {
	const arr = [1, 2, 3, 4, 5, 5, 6, 7];
	return (
		<Content size='large'>
			<StyledQuestsList>
				{arr.map((item, index) => {
					return <QuestItem />;
				})}
			</StyledQuestsList>
		</Content>
	);
};

export default QuestsPage;
