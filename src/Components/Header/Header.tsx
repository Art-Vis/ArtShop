import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { loadLikesFromStorage } from '../../store/likeItemsSlice';

const Header = () => {
	const dispatch = useDispatch();
	const likedItemsCount = useSelector(
		(state: RootState) => state.likes.likedItemsCount
	);

	useEffect(() => {
		dispatch(loadLikesFromStorage());
	}, [dispatch]);

	return (
		<header id='header' className='header'>
			<div className='container header-container'>
				<Link to={'/'}>
					<h1 className='header__title'>Art-Shop</h1>
				</Link>

				<div className='header__input'>
					<input
						className='header__search'
						type='text'
						name='search'
						placeholder='Поиск'
					/>
					<button className='header__search-icon btn'></button>
				</div>

				<nav className='header__nav'>
					<div className='header__btns'>
						<button className='header__profile header__btn btn'>Профиль</button>
						{likedItemsCount === 0 ? (
							<button className='header__favorite header__btn btn'>
								Избранное
							</button>
						) : (
							<div className='header__favorite-wrap'>
								<button className='header__favorite header__btn btn'>
									Избранное
								</button>
								<span className='header__favorite-count'>
									{likedItemsCount}
								</span>
							</div>
						)}
						<button className='header__basket header__btn btn'>Корзина</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
