import axios from 'axios';
import { ICards } from '../interface/interface';

export const getProducts = async (category: string): Promise<ICards> => {
	try {
		const response = await axios.get(
			`http://localhost:3000/products/${category}`
		);
		return response.data;
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
};

export const getCategoryes = async () => {
	try {
		const response = await axios.get('http://localhost:3000/products');
		return response.data;
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
};
