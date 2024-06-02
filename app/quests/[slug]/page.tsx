'use client';

import { useParams } from 'next/navigation';
import { NextPage } from 'next';
import { Content } from '@/components/Content/Content';
import { QuestItem } from '@/components/QuestItem/QuestItem';

const QuestSlugPage: NextPage = () => {
	const { slug } = useParams();

	return (
		<Content size='small'>
			<QuestItem detailed={true} />
		</Content>
	);
};

export default QuestSlugPage;
