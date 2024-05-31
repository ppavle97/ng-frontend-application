'use client';

import { useParams } from 'next/navigation';
import { NextPage } from 'next';
import { Content } from '@/components/Content/Content';

const QuestSlugPage: NextPage = () => {
	const { slug } = useParams();

	return (
		<Content size='small'>
			<h1>Quest Detail Page</h1>
			<p>This is the detail page for the quest with slug: {slug}</p>
		</Content>
	);
};

export default QuestSlugPage;
