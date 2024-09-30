import { FC, useEffect, useState } from 'react';
import { ICard, ICards } from '../../interface/interface';
import { getProducts } from '../../api/getApi';
import './Cards.css';
import Like from '../../SvgIcons/Svgicons';

interface CardsProps {
	category: string;
}

const Cards: FC<CardsProps> = ({ category }) => {
	const [products, setProducts] = useState<ICards>([]);
	const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

	useEffect(() => {
		const fetchProducts = async () => {
			if (category) {
				try {
					const res: ICards = await getProducts(category);
					console.log('fetchProducts ~ res:', res);
					setProducts(res);
				} catch (error) {
					console.log('fetchProducts ~ error:', error);
				}
			}
		};

		fetchProducts();
	}, [category]);

	const toggleLike = (id: number) => {
		setLikedItems(prev => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<section className='cards'>
			<div className='container cards-container'>
				<ul className='cards'>
					{products.map((item: ICard, index: number) => (
						<li className='card' key={index}>
							<img
								className='card__image'
								src={item.image_url}
								alt={`Изображение товара ${item.name}}`}
							/>
							<button
								className='card__like'
								onClick={() => toggleLike(item.id)}
							>
								<Like
									widthSvg={'100%'}
									heightSvg={'100%'}
									fill={likedItems[item.id] ? 'red' : 'none'}
								/>
							</button>
							<h2 className='card__title'>{item.name}</h2>
							<span className='card__rating'>Рейтинг: {item.rating}</span>
							<span className='card__price'>Цена: {item.price} руб.</span>
							<button className='card__btn'>В корзину</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Cards;
