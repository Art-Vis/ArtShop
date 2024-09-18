import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './api/getProducts';
import { ICard, ICards } from './interface/interface';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';

function App() {
	const [products, setProducts] = useState<ICards>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res: ICards = await getProducts();
				setProducts(res);
			} catch (error) {
				console.log('fetchProducts ~ error:', error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<>
			<Header />
			<main className='main'>
				<Category />
				<section className='cards'>
					<div className='container cards-container'>
						<ul>
							{products.map((item: ICard, index: number) => (
								<li key={index}>
									<h2>{item.title}</h2>
									<img
										src={item.image}
										alt={`Изображение товара ${item.title}}`}
									/>
									<span>Count: {item.rating.count}</span>
									<span>Rate: {item.rating.rate}</span>
									<span>{item.price}</span>
									<span>{item.category}</span>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
