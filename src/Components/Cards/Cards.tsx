import { FC, useEffect } from 'react';
import { ICard } from '../../interface/interface';
import './Cards.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { toggleLike } from '../../store/likeItemsSlice';
import { fetchProducts } from '../../store/productsSlice';
import Card from '../Card/Card';

interface CardsProps {
	category: string;
}

const Cards: FC<CardsProps> = ({ category }) => {
	const dispatch: AppDispatch = useDispatch();
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
		return (
			<div className='loader-container'>
				<div className='loader'></div>
			</div>
		);
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}

	return (
		<section className='cards'>
			<div className='container cards-container'>
				<ul className='cards'>
					{products.map((item: ICard, index: number) => (
						<Card
							key={index}
							item={item}
							isLiked={likedItems[category]?.[item.id] || false}
							onToggleLike={handleToggleLike}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Cards;
