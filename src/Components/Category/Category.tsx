import { useState } from 'react';
import { ICategorys } from '../../interface/interface';

const [categorys, setCategorys] = useState<ICategorys>([]);

const Category = () => {
	return (
		<section className='category'>
			<div className='container category-container'>
				<h2>Категории</h2>
				<ul>
					<li></li>
				</ul>
			</div>
		</section>
	);
};

export default Category;
