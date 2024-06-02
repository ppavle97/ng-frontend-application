export interface QuestItemProps {
	detailed?: boolean;
	item: {
		title: string;
		difficulty: string;
		description: string;
		slug: string;
		cover?: string;
		language: {
			label: string;
			id: string;
		};
		type: {
			label: string;
			id: string;
		};
		rewards: {
			expPoints: number;
			gold: number;
		};
	};
}

export interface StyledQuestItemProps {
	detailed?: boolean;
	cover?: boolean;
}
