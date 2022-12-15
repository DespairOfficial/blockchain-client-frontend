import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCoins } from '../../http/blockchainApi';
import { CoinsRespose } from '../../interfaces/Info';

const InfoBar = () => {
	const [coinsData, setCoinsData] = useState<CoinsRespose>();

	useEffect(() => {
		getCoins().then((data) => {
			setCoinsData(data);
		});
	}, []);
	return (
		<div className="bg-white p-5 flex flex-row space-x-5">
			<NavLink to="/"  className={({ isActive }) => (isActive ? 'font-bold': 'inactive')}>Home</NavLink>
			<NavLink to="/table"  className={({ isActive }) => (isActive ? 'font-bold' : 'inactive')}>Table</NavLink>
			<NavLink to="/messenger"  className={({ isActive }) => (isActive ? 'font-bold' : 'inactive')}>Messenger</NavLink>

			<div className="flex flex-row content-end">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					color="black"
					className="w-6 h-6 fill-yellow-200"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
					/>
				</svg>

				<p> {coinsData?.coins}</p>
			</div>
		</div>
	);
};
export default InfoBar;
