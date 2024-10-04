import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedItemsState {
	likedItems: Record<string, Record<number, boolean>>;
	likedItemsCount: number;
}

const initialState: LikedItemsState = {
	likedItems: JSON.parse(localStorage.getItem('likedItems') || '{}'),
	likedItemsCount: 0,
};

const likesSlice = createSlice({
	name: 'likes',
	initialState,
	reducers: {
		toggleLike: (
			state,
			action: PayloadAction<{ category: string; id: number }>
		) => {
			const { category, id } = action.payload;
			if (!state.likedItems[category]) {
				state.likedItems[category] = {};
			}

			state.likedItems[category][id] = !state.likedItems[category][id];

			let count = 0;
			for (const category in state.likedItems) {
				for (const id in state.likedItems[category]) {
					if (state.likedItems[category][id]) {
						count++;
					}
				}
			}
			state.likedItemsCount = count;

			localStorage.setItem('likedItems', JSON.stringify(state.likedItems));
		},
		loadLikesFromStorage: state => {
			const likedItemsString = localStorage.getItem('likedItems');
			if (likedItemsString) {
				state.likedItems = JSON.parse(likedItemsString);

				let count = 0;
				for (const category in state.likedItems) {
					for (const id in state.likedItems[category]) {
						if (state.likedItems[category][id]) {
							count++;
						}
					}
				}
				state.likedItemsCount = count;
			}
		},
	},
});

export const { toggleLike, loadLikesFromStorage } = likesSlice.actions;
export default likesSlice.reducer;
