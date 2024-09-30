const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

// Маршрут для получения всех товаров
app.get('/products', (req, res) => {
	fs.readFile('./data.json', 'utf-8', (err, data) => {
		if (err) {
			res.status(500).json({ message: 'Ошибка при чтении файла' });
		} else {
			res.json(JSON.parse(data));
		}
	});
});

// Маршрут для получения товаров по категории
app.get('/products/:category', (req, res) => {
	const category = req.params.category;

	fs.readFile('./data.json', 'utf-8', (err, data) => {
		if (err) {
			res.status(500).json({ message: 'Ошибка при чтении файла' });
		} else {
			const products = JSON.parse(data);
			if (products[category]) {
				res.json(products[category]);
			} else {
				res.status(404).json({ message: 'Категория не найдена' });
			}
		}
	});
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
