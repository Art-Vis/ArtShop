export interface ICard {
	category?: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: { count: number; rate: number };
	title: string;
}

export type ICards = ICard[];

export interface ICategory {
	name: string;
}

export type ICategorys = ICategory[];
