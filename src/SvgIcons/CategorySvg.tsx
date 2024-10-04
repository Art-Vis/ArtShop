import { FC } from 'react';
import { SvgIconsProps } from '../interface/interface';

export const SvgIcons: FC<SvgIconsProps> = ({ src }) => {
	return (
		<img
			className='category__img'
			src={src}
			alt='icon'
			width='50px'
			height='50px'
		/>
	);
};
