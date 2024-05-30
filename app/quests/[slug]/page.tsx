import { useRouter } from 'next/router';
import { NextPage } from 'next';

const QuestSlugPage: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div>
			<h1>Quest Detail Page</h1>
			<p>This is the detail page for the quest with slug: {slug}</p>
		</div>
	);
};

export default QuestSlugPage;
