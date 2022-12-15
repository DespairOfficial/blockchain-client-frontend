import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Messenger from '../Messenger/Messenger';
import TablePage from '../TablePage/TablePage';

const Content = () => {
	return (
		<div className="bg-gray-300 w-screen h-[calc(100%_-_65px)] items-center justify-center flex ">
			<div className="relative bg-white w-2/3 h-2/3  flex-col flex p-10 items-center space-y-10 shadow-xl">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/table" element={<TablePage />} />
					<Route path="/messenger" element={<Messenger />} />

				</Routes>
			</div>
		</div>
	);
};

export default Content;
