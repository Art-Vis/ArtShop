import './Header.css';

const Header = () => {
	return (
		<header id='header' className='header'>
			<div className='container header-container'>
				<h1 className='header__title'>Art-Shop</h1>

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
						<button className='header__favorite header__btn btn'>
							Избранное
						</button>
						<button className='header__basket header__btn btn'>Корзина</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
