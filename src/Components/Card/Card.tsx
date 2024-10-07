import { FC } from 'react';
import { ICard } from '../../interface/interface';
import LikeSvg from '../../SvgIcons/LikeSvg';
import './Card.css';

interface CardProps {
	item: ICard;
	isLiked: boolean;
	onToggleLike: (id: number) => void;
}

const Card: FC<CardProps> = ({ item, isLiked, onToggleLike }) => {
	return (
		<li className='card'>
			<img
				className='card__image'
				src={item.image_url}
				alt={`Изображение товара ${item.name}}`}
			/>
			<button className='card__like' onClick={() => onToggleLike(item.id)}>
				<LikeSvg
					widthSvg={'100%'}
					heightSvg={'100%'}
					fill={isLiked ? 'red' : 'none'}
				/>
			</button>
			<h2 className='card__title'>{item.name}</h2>
			<span className='card__rating'>Рейтинг: {item.rating}</span>
			<span className='card__price'>Цена: {item.price} руб.</span>
			<button className='card__btn'>В корзину</button>
		</li>
	);
};
export default Card;
