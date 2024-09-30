import axios from 'axios';

export const getProducts = async (category: string) => {
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
