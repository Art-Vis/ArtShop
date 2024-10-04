import './App.css';
import { lazy, Suspense } from 'react';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import { Route, Routes, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
const LazyCards = lazy(() => import('./Components/Cards/Cards'));

function App() {
	return (
		<Provider store={store}>
			<Header />
			<main className='main'>
				<Category />
				<Suspense fallback={<div className='loader'>is Loading</div>}>
					<Routes>
						<Route path='/:category' element={<CategoryWrapper />} />
					</Routes>
				</Suspense>
			</main>
		</Provider>
	);
}

const CategoryWrapper = () => {
	const { category } = useParams();
	return <LazyCards category={category!} />;
};

export default App;
