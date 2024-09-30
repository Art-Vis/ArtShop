export interface ICategory {
	name: string;
}
export type ICategorys = ICategory[];

export interface ICard {
	id: number;
	name: string;
	description: string;
	image_url: string;
	price: number;
	rating: number;
	stock: number;
}

export type ICards = ICard[];
