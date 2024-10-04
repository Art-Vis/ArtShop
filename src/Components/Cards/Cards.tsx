import { FC, useEffect } from 'react';
import { ICard } from '../../interface/interface';
import './Cards.css';
import LikeSvg from '../../SvgIcons/LikeSvg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleLike } from '../../store/likeItemsSlice';
import { fetchProducts } from '../../store/productsSlice';

interface CardsProps {
	category: string;
}

const Cards: FC<CardsProps> = ({ category }) => {
	const dispatch = useDispatch();
	const { products, status, error } = useSelector(
		(state: RootState) => state.products
	);
	const likedItems = useSelector((state: RootState) => state.likes.likedItems);

	const handleToggleLike = (id: number) => {
		dispatch(toggleLike({ category, id }));
	};

	useEffect(() => {
		if (category) {
			dispatch(fetchProducts(category));
		}
	}, [category, dispatch]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}

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
								onClick={() => handleToggleLike(item.id)}
							>
								<LikeSvg
									widthSvg={'100%'}
									heightSvg={'100%'}
									fill={likedItems[category]?.[item.id] ? 'red' : 'none'}
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
