import { useEffect, useState } from 'react';
import { getCategoryes } from '../../api/getApi';
import { ICategorys } from '../../interface/interface';
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
	const [categorys, setCategorys] = useState<ICategorys>([]);

	useEffect(() => {
		const fetchCategoryes = async () => {
			try {
				const res: ICategorys = await getCategoryes();
				console.log('fetchCategoryes ~ res:', res);
				setCategorys(res);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategoryes();
	}, []);

	return (
		<section className='category'>
			<div className='container category-container'>
				<div className='category__wrap'>
					<Link to={'/pk'}>
						<h2 className='category__title' data-text='Ноутбуки'>
							Ноутбуки
						</h2>
					</Link>
					<Link to={'/mobile'}>
						<h2 className='category__title' data-text='Телефоны'>
							Телефоны
						</h2>
					</Link>
					<Link to={'/tv'}>
						<h2 className='category__title' data-text='Телевизоры'>
							Телевизоры
						</h2>
					</Link>
					<Link to={'/consoles'}>
						<h2 className='category__title' data-text='Игровые приставки'>
							Игровые приставки
						</h2>
					</Link>
					<Link to={'/accessories'}>
						<h2 className='category__title' data-text='Акксессуары'>
							Акксессуары
						</h2>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Category;
