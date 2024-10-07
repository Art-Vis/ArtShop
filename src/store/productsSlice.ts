import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/getApi';
import { ICard } from '../interface/interface';

interface ProductsState {
	products: ICard[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: ProductsState = {
	products: [],
	status: 'idle',
	error: null,
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (category: string) => {
		const response = await getProducts(category);
		return response;
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to load products';
			});
	},
});

export default productsSlice.reducer;
