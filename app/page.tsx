import { redirect } from 'next/navigation';

export default async function Page() {
	redirect('/quests');
	return null;
}
