import axios from 'axios';

export const getProducts = async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products');
		return response.data;
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
};

export const getCategoryes = async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products');
		return response.data.category;
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
};
