'use client';
import { useParams } from 'next/navigation';
import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';

import { Content } from '@/components/Content/Content';
import { QuestItem } from '@/components/QuestItem/QuestItem';

const fetchQuest = async (slug: string | string[]) => {
	try {
		const { data } = await axios.get(`/api/quest?questSlug=${slug}`);
		return data;
	} catch (error) {
		throw error;
	}
};

const QuestSlugPage: NextPage = () => {
	const { slug } = useParams();
	const { data, error, isLoading } = useQuery({
		queryKey: ['questSlug', slug],
		queryFn: () => fetchQuest(slug),
		enabled: !!slug
	});

	return (
		<>
			<Head>
				<title>{data ? data.title : 'NG Frontend Application'}</title>
				<meta name='description' content={data ? data.description : 'Loading quest details...'} />
			</Head>
			<Content size='small'>
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
				{data && <QuestItem item={data} detailed={true} />}
			</Content>
		</>
	);
};

export default QuestSlugPage;
