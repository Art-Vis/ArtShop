import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import likesReducer from './likeItemsSlice';

const store = configureStore({
	reducer: {
		products: productsReducer,
		likes: likesReducer,
	},
});

// Экспортируйте RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
