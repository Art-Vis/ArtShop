import './Category.css';
import { Link } from 'react-router-dom';

import { SvgIcons } from '../../SvgIcons/CategorySvg';

const Category = () => {
	return (
		<section className='category'>
			<div className='container category-container'>
				<button className='category__btn btn'>Категории</button>
				<ul className='category__list'>
					<Link to={'/pk'}>
						<li className='category__item'>
							<h2 className='category__title notebook' data-text='Ноутбуки'>
								Ноутбуки
							</h2>
							<SvgIcons src={'./src/assets/pk.svg'} />
						</li>
					</Link>
					<Link to={'/mobile'}>
						<li className='category__item'>
							<h2 className='category__title phone' data-text='Телефоны'>
								Телефоны
							</h2>
							<SvgIcons src={'./src/assets/phone-new.svg'} />
						</li>
					</Link>
					<Link to={'/tv'}>
						<li className='category__item'>
							<h2 className='category__title tv' data-text='Телевизоры'>
								Телевизоры
							</h2>
							<SvgIcons src={'./src/assets/tv.svg'} />
						</li>
					</Link>
					<Link to={'/consoles'}>
						<li className='category__item'>
							<h2
								className='category__title consoles'
								data-text='Игровые приставки'
							>
								Игровые приставки
							</h2>
							<SvgIcons src={'./src/assets/consoles.svg'} />
						</li>
					</Link>
					<Link to={'/accessories'}>
						<li className='category__item'>
							<h2
								className='category__title accessories'
								data-text='Акксессуары'
							>
								Акксессуары
							</h2>
							<SvgIcons src={'./src/assets/headphones.svg'} />
						</li>
					</Link>
				</ul>
			</div>
		</section>
	);
};

export default Category;
