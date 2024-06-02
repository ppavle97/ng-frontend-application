import { atom } from 'jotai';

export const goldAtom = atom(0);
export const xpAtom = atom(0);
export const airdroppedItemsAtom = atom(new Set());

export const airdropRewards = atom(null, (get, set, { amountOfGold, amountOfXp, slug }) => {
	const airdroppedItems = get(airdroppedItemsAtom);
	if (airdroppedItems.has(slug)) {
		console.log(`Item with slug ${slug} has already been airdropped.`);
		return;
	}

	set(goldAtom, get(goldAtom) + amountOfGold);
	set(xpAtom, get(xpAtom) + amountOfXp);
	set(airdroppedItemsAtom, new Set(airdroppedItems).add(slug));
});

export const hasAirdroppedSelector = atom((get) => (slug) => get(airdroppedItemsAtom).has(slug));
