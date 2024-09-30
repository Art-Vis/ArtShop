import './App.css';
import { lazy, Suspense } from 'react';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import { Route, Routes, useParams } from 'react-router-dom';
const LazyCards = lazy(() => import('./Components/Cards/Cards'));

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Category />
				<Suspense fallback={<div>is Loading</div>}>
					{/* <LazyCards /> */}
					<Routes>
						<Route path='/:category' element={<CategoryWrapper />} />
					</Routes>
				</Suspense>
			</main>
		</>
	);
}

const CategoryWrapper = () => {
	const { category } = useParams();
	return <LazyCards category={category!} />;
};

export default App;
